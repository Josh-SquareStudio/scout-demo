import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';
import { Media } from '../../app/media/media';
import { UtilService } from '../../app/util/util.service';
import { HeaderService } from '../../components/header/header.service';
import { ProfileService } from '../profile/profile.service';
import { Platform } from 'ionic-angular'; //for checking if device is ios for different maps app

@Component({
  selector: 'venue-detail',
  templateUrl: 'venue-detail.html',
  providers : [HeaderService]
})
export class VenueDetail implements OnInit{

	venue: Venue;
	media: Media;
  venue_link: string;
  favorited : boolean;
	top_media: any[];
  heart_image: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private utils: UtilService, private headerService: HeaderService, private profileService: ProfileService, private plt: Platform) {
  	this.venue = this.navParams.get('venue');
  	this.media = this.navParams.get('media');
    this.venue_link = this.navParams.get('venue_link');
  	this.top_media = [];
    this.favorited = false;
    this.heart_image = '../../assets/icons/scoutHEART.png';
    this.headerService.venueDetailIcons();
  }

	ngOnInit(): void {
    this.rank_latest_media();
    this.check_favorite();
    this.venue.distance = this.utils.get_distance(this.venue.lat,this.venue.lng);
	}

  rank_latest_media(){
  	var temp_media = [];
  	var how_many_top = 10;
  	for (var prop in this.media) {
       temp_media.push(this.media[prop]);
    }
    temp_media = this.utils.order_array_by(temp_media,'likes');
    if(temp_media.length < (how_many_top+1)){
    	how_many_top = temp_media.length;
    }
    for(var i=1; i<(how_many_top+1); i+=2){
    	this.top_media.push([temp_media[i],temp_media[i+1]]);
    }
  }

  check_favorite(){
    var self = this;
    this.profileService.getProfile(function(profile){
      for(var i=0; i<profile.favorites.length; i++){
        if(self.venue_link == profile.favorites[i].link){
          self._favorited();
        }
      }
    });
  }

  favorite_venue(){
    var self = this;
    if(!(this.favorited)){
      this.profileService.favoriteVenue(this.venue_link,function(){
        self._favorited();
      });
    }
    else{
      this.profileService.unFavoriteVenue(this.venue_link,function(){
        self._unfavorited();
      });
    }
  }

  open_map(){
    var geocoords = this.venue.lat + ',' + this.venue.lng;

    if (this.plt.is('ios')) {
      window.open('maps://?q=' + geocoords, '_system');
    }
    else if(this.plt.is('android')){
      window.open('geo:0,0?q=' + geocoords, '_system');
    }
    else{
      window.open('https://maps.google.com/maps/place/' + geocoords, '_blank');
    }
  }

  get_distance(){

  }

  _favorited(){
    this.favorited = true;
    this.heart_image = '../../assets/icons/scoutHEARTFULL.png';
  }

  _unfavorited(){
    this.favorited = false;
    this.heart_image = '../../assets/icons/scoutHEART.png';
  }

}
