import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HeaderService } from '../../components/header/header.service';
import { Profile }  from './profile.class';
import { ProfileService } from './profile.service';
import { VenueService } from '../../app/venues/venue.service';
import { VenueDetail } from '../venue-detail/venue-detail';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html',
  providers: [HeaderService, VenueService]
})
export class ProfilePage implements OnInit{

  id: string;
	name: string;
	email: string;
	profile_picture: string;
	favorite_links: any[];
  favorite_venues: any[];

	constructor(public navCtrl: NavController, private headerService: HeaderService, private profileService: ProfileService, private venueService: VenueService, private afd: AngularFireDatabase) {
		this.headerService.profileIcons();
		this.favorite_venues = [];
	  this.favorite_links = [];
	}

	ngOnInit(){
		//this.setupProfile();
	}

	ionViewWillEnter() {
    this.setupProfile();
  }

	setupProfile(){
		var self = this;
		this.getProfileInfo(function(){
      self.favorite_links = self.getFavorites(self.id);
    }); 
	}

	getProfileInfo(callback){
		var self = this;
		this.profileService.checkUser(function(profile){
			self.id = profile.id;
			self.name = profile.name;
			self.email = profile.email;
      self.profile_picture = profile.picture.data.url;
      callback();
		});
	}

  getFavorites(id: string){
		var favorites = this.afd.object('/profiles/' + id + '/favorites', {preserveSnapshot: true});
		favorites.subscribe(snapshot =>{
			//alert(JSON.stringify(snapshot.val()))
			return snapshot.val();
		})
		return [];
	}





	getProfileFavorites(i,favorites,callback){
		var self = this;
		this.venueService.get_favorite_venue(this.favorite_links[i].link,function(venue){
			favorites.push({
				link: self.favorite_links[i].link,
				venue: venue,
				present: true										//used for the template
			});
			i++;
			if(i < self.favorite_links.length){
				self.getProfileFavorites(i,favorites,callback);
			}
			else{
				callback(favorites);
			}
		});
	}

	openFavorite(favorite){
		var parts = favorite.link.split('/');
		var media_link = 'media/'+parts[1]+'/'+parts[2];
		var self = this;
		this.venueService.get_favorite_venue_media(media_link,function(media){
			self.navCtrl.push(VenueDetail, {
	        venue : favorite.venue,
	        media : media,
	        venue_link : favorite.link
	      });
		});
	}

}
