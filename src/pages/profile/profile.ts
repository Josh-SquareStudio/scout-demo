import { Component, OnInit} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HeaderService } from '../../components/header/header.service';
import { ProfileService } from './profile.service';
import { VenueService } from '../../app/venues/venue.service';
import { VenueDetail } from '../venue-detail/venue-detail';

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
  favs: any[];

	constructor(public navCtrl: NavController, private headerService: HeaderService, private profileService: ProfileService, private venueService: VenueService) {
		this.headerService.profileIcons();
		this.favorite_venues = [];
	  this.favorite_links = [];
    this.favs = [];
	}

	ngOnInit(){
		this.setupProfile();
	}

	ionViewWillEnter() {
    //this.setupProfile();
  }

  pipeFavorites(){
    this.favs = [];
    for(var i = 0; i < this.favorite_venues.length; i++){
      if(i == this.favorite_venues.length - 1){
        this.favs.push([this.favorite_venues[i], {"link":"","venue":"","bio":"","followers":0,"key":""}]);
        //alert(JSON.stringify(this.favorite_venues[i]));
        continue;
      }
      if(i%2 == 0){
        this.favs.push([this.favorite_venues[i], this.favorite_venues[i+1]]);
      }
    }
  }

	setupProfile(){
		var self = this;
		this.getProfileInfo(function(){
      self.profileService.getFavoritesSubscribe(self.id, function(favorites){
        self.favorite_links = favorites;

        for(var key in favorites){
          self.getFavoriteVenue(favorites[key].link, function(venue){
            self.favorite_venues.push({
              link: favorites[key].link,
              venue: venue,
              present: true
            });
            self.pipeFavorites();
          });
        }
      });
    });
	}

	getProfileInfo(callback){
		var self = this;
		this.profileService.checkUser(function(profile){
			self.id = profile.id;
			self.name = profile.name;
			self.email = profile.email;
      self.profile_picture = profile.picture;
      callback();
		});
	}

  getFavoriteVenue(link, callback){
    this.venueService.get_favorite_venue(link, function(venue){
      callback(venue);
    })
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
