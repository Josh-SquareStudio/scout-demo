import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Profile }  from './profile.class';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Injectable()
export class ProfileService {

	profile : Profile;

	constructor(public afd: AngularFireDatabase, private facebook: Facebook) { }

	checkUser(callback: any){
    var self = this;
    this.facebook.getLoginStatus().then((response) =>{
      if (response.status === 'connected') {
				//get user data from facebook
				self.facebook.api('/' + response.authResponse.userID + '?fields=id,name,email,picture.type(large)',[]).then((response)=>{
					self.profile = response;
					self.profile.favorites = [];

					callback(self.profile);
        }, (error) => {
          alert(error);
        })
      } else if (response.status === 'not_authorized') {
        alert('You have not authorized this app with facebook');
      } else {
        alert('You are not logged in '); //shoudn't ever happen
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

  getFirebaseProfile(profileString: string,callback:any){
  	var self = this;
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

  favoriteVenue(venueString: string, callback: any){
  	var self = this;
  	var favorites = this.afd.list('/profiles/'+this.profile.id+'/favorites');
  	favorites.push({link:venueString}).then((item) => {
  		self.getFirebaseProfile('/profiles/'+this.profile.id,function(profile){
  			callback();
  		});
  	});
  }

  unFavoriteVenue(venueString: string, callback: any){
  	var self = this;
  	this.profile.favorites.push(venueString);
  	this.getProfile(function(p){
  		var delete_key = "";
			for (var key in p.favorites) {
		  	if (p.favorites[key].link == venueString){
		  		delete_key = p.favorites[key].key;
		  	}
			}
			var favorites = self.afd.list('/profiles/'+this.profile.id+'/favorites');
			favorites.remove(delete_key).then((item) => {
				console.log('removed');
	  		self.getFirebaseProfile('/profiles/-'+this.profile.id,function(profile){
	  			callback();
	  		});
	  	});
  	})
  }

}
