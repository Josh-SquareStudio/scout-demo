import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Profile }  from './profile.class';
import { Facebook } from '@ionic-native/facebook';

@Injectable()
export class ProfileService {

	profile : Profile;

	constructor(private afd: AngularFireDatabase, private facebook: Facebook) {
		this.profile = {
			id: "",
			name: "",
			email: "",
			picture: ""
		}
	}

	checkUser(callback: any){
		var self = this;
		firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
				self.profile.id = user.uid;
				self.profile.name = user.displayName;
				if(user.user_location){
					self.profile.email = user.user_location;
				}
				self.profile.picture = user.photoURL;
				callback(self.profile);
		  }
		});
  }


	getProfile(callback: any){
		var self = this;
		if(this.profile != undefined){
			console.log('get cache profile');
			callback(this.profile);
		}
		else{
			self.getFirebaseProfile('/profiles/'+this.profile.id,function(profile){
				callback(profile);
			});
		}
  }

  //get the favourites of the facebook user
  getFirebaseProfile(profileString: string,callback:any){
		var profile = this.afd.object(profileString, { preserveSnapshot: true });
		profile.subscribe(snapshot => {																								//convert favorites to array for ease
			var p = snapshot.val();
			var favorites = [];
			for (var key in p.favorites) {
			  favorites.push({key:key,link:p.favorites[key].link});
			}
			p.favorites = favorites;
		  callback(p);
		});
  }

  /*favoriteVenue(venueString: string, callback: any){
  	var self = this;
  	var favorites = this.afd.list('/profiles/'+this.profile.id+'/favorites');
  	favorites.push({link:venueString}).then((item) => {
  		self.getFirebaseProfile('/profiles/'+this.profile.id,function(profile){
				//profile.favorites is a list of objects with profile.favorites[i].link being the link
  			//callback();
  		});
  	});
  }*/

	getFavoritesSubscribe(id: string, callback: any){
		var favorites = this.afd.object('/profiles/' + id + '/favorites', {preserveSnapshot: true});
		favorites.subscribe(snapshot =>{
      callback(snapshot.val());
		});
	}

	getFavorites(id: string, callback: any){
		var favorites = this.afd.object('/profiles/' + id + '/favorites', {preserveSnapshot: true}).take(1);
		favorites.subscribe(snapshot =>{
      callback(snapshot.val());
		});
	}

	getFavoritesAsList(){
		var f = this.afd.list('/profiles/'+this.profile.id+'/favorites');
		console.log(f);
		return f;
	}

	favoriteVenue(venueString : string, callback: any){
		this.afd.list('/profiles/'+this.profile.id+'/favorites').push({link:venueString}).then(_ => callback());
	}

  unFavoriteVenue(venueString: string, callback: any){
  	var self = this;
		var deleteKey = "";

  	//this.profile.favorites.push(venueString);
  	this.getFavorites(this.profile.id, function(favs){
			for (var key in favs){
				if(favs[key].link == venueString){
					deleteKey = key;
					continue;
				}
			}

			//alert(deleteKey);

			if(deleteKey != ""){
				self.afd.list('/profiles/'+self.profile.id+'/favorites').remove(deleteKey).then(_ => callback());
			}
  	});
  }

}
