import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import firebase from 'firebase';
import { Profile }  from './profile.class';
import { Facebook } from '@ionic-native/facebook';
import { EmailComposer } from '@ionic-native/email-composer';

@Injectable()
export class ProfileService {

  profile: Profile;

  constructor(private afd: AngularFireDatabase, private facebook: Facebook, private emailComposer: EmailComposer) {
    this.profile = {
      id: "",
      name: "",
      email: "",
      picture: ""
    }
  }

  checkUser(callback: any) {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        self.profile.id = user.uid;
        self.profile.name = user.displayName;
        if (user.user_location) {
          self.profile.email = user.user_location;
        }
        self.profile.picture = user.photoURL;
        callback(self.profile);
      }
    });
  }

  getProfile(callback: any) {
    var self = this;
    if (this.profile != undefined) {
      console.log('get cache profile');
      callback(this.profile);
    }
    else {
      self.getFirebaseProfile('/profiles/' + this.profile.id, function(profile) {
        callback(profile);
      });
    }
  }

  //get the favourites of the facebook user
  getFirebaseProfile(profileString: string, callback: any) {
    var profile = this.afd.object(profileString, { preserveSnapshot: true });
    profile.subscribe(snapshot => {																								//convert favorites to array for ease
      var p = snapshot.val();
      var favorites = [];
      for (var key in p.favorites) {
        favorites.push({ key: key, link: p.favorites[key].link });
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

  getFavoritesSubscribe(id: string, callback: any) {
    var favorites = this.afd.object('/profiles/' + id + '/favorites', { preserveSnapshot: true });
    favorites.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  getFavorites(id: string, callback: any) {
    var favorites = this.afd.object('/profiles/' + id + '/favorites', { preserveSnapshot: true }).take(1);
    favorites.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  getFavoritesAsList() {
    var f = this.afd.list('/profiles/' + this.profile.id + '/favorites');
    console.log(f);
    return f;
  }

  favoriteVenue(venueString: string, callback: any) {
	alert(venueString);
    this.afd.list('/profiles/' + this.profile.id + '/favorites').push({ link: venueString }).then(_ => callback());
  }

  unFavoriteVenue(venueString: string, callback: any) {
    var self = this;
    var deleteKey = "";

    //this.profile.favorites.push(venueString);
    this.getFavorites(this.profile.id, function(favs) {
      for (var key in favs) {
        if (favs[key].link == venueString) {
          deleteKey = key;
          continue;
        }
      }

      //alert(deleteKey);

      if (deleteKey != "") {
        self.afd.list('/profiles/' + self.profile.id + '/favorites').remove(deleteKey).then(_ => callback());
      }
    });
  }

  flagVenue(key: string, reason: string) {
    var self = this;
    var chains, wrong_profiles, repeats, others, total_flags, reportedBy;

    var flags = this.afd.object('/flags/' + key);
    flags.take(1)
      .subscribe((data) => {
        console.log(data);
        try {
          chains = data.reason.chain;
          wrong_profiles = data.reason.wrong_profile;
          repeats = data.reason.repeat;
          others = data.reason.other;
          reportedBy = data.reportedBy;
        } catch (e) {
          chains = 0;
          wrong_profiles = 0;
          repeats = 0;
          others = 0;
          reportedBy = [];
        }

        var alreadyReported = false;
        for (var i = 0; i < reportedBy.length; i++) {
          if (self.profile.id == reportedBy[i]) {
            alreadyReported = true;
            break;
          }
        }

        if (!alreadyReported) {
          reportedBy.push(self.profile.id);

          switch (reason) {
            case "chain":
              chains++; break;
            case "wrong profile":
              wrong_profiles++; break;
            case "repeat":
              repeats++; break;
            case "other":
              others++; break;
          }

          total_flags = chains + wrong_profiles + repeats + others;
          if (total_flags > 0) {

            self.emailComposer.isAvailable().then((available: boolean) => {
              if (available) {
                let email = {
                  to: 'solfonictoast@gmail.com',
                  subject: 'Scout flag notification',
                  body: 'Venue ' + key + ' has received enough flags to trigger this email',
                  isHtml: true
                };

                // Send a text message using default options
                alert("before email");
                self.emailComposer.open(email);
                alert("emailed");
              } else {
                alert("email not avaiable");
              }
            });
          }

          flags.set({
            reportedBy: reportedBy,
            reason: {
              chain: chains,
              wrong_profile: wrong_profiles,
              repeat: repeats,
              other: others
            }
          });
        }
      });
  }

}
