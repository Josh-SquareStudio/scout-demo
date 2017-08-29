import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HeaderService } from '../../components/header/header.service';
import { Profile }  from './profile.class';
import { ProfileService } from './profile.service';
import { VenueService } from '../../app/venues/venue.service';
import { VenueDetail } from '../venue-detail/venue-detail';

@Component({
  selector: 'profile-page',
  templateUrl: 'profile.html',
  providers: [HeaderService, VenueService]
})
export class ProfilePage implements OnInit{

	favorite_links : any[];
	favorite_venues : any[];
	profile_name : string;
	profile_bio : string;
	profile_picture : string;

	constructor(public navCtrl: NavController, private headerService: HeaderService, private profileService: ProfileService, private venueService: VenueService) {
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
		this.favorite_venues = [];
		this.favorite_links = [];
		this.getProfileInfo(function(){
			self.getProfileFavorites(0,[],function(favorites){
				for(var i=0; i<favorites.length; i+=2){
					if((i+1)<favorites.length){
						self.favorite_venues.push([favorites[i],favorites[i+1]]);
					}
					else{
						self.favorite_venues.push([favorites[i],{link:"",venue:{most_liked_media:"",name:""},present:false}]);
					}
				}
			})
		});		
	}

	getProfileInfo(callback){
		var self = this;
		this.profileService.getProfile(function(profile){
			self.profile_name = profile.instagram;
			self.profile_bio = profile.bio;
			self.profile_picture = profile.profile_picture;
			self.favorite_links = profile.favorites;
			callback();
		});
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
