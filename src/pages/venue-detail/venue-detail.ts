import { Component, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Venue } from '../../app/venues/venue';
import { Media } from '../../app/media/media';
import { UtilService } from '../../app/util/util.service';
import { HeaderService } from '../../components/header/header.service';
import { ProfileService } from '../profile/profile.service';
import { Platform } from 'ionic-angular'; //for checking if device is ios for different maps app
import { AngularFireDatabase } from 'angularfire2/database';

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
  checked: boolean;

  constructor(private afd: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private utils: UtilService, private headerService: HeaderService, private profileService: ProfileService, private plt: Platform) {
  	this.venue = this.navParams.get('venue');
  	this.media = this.navParams.get('media');
    this.venue_link = this.navParams.get('venue_link');
  	this.top_media = [];
    this.favorited = false;
    this.heart_image = 'assets/icons/scoutHEART.png';
    this.headerService.venueDetailIcons();
    this.checked = false;
  }

	ngOnInit(): void {
    this.rank_latest_media();
    this.check_favorite();
    this.venue.distance = this.utils.get_distance(this.venue.lat,this.venue.lng);
	}

  open_instagram(){
    window.location.href = "https://www.instagram.com/" + this.venue.instagram;
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
      this.profileService.checkUser(function(profile){
        var favorites = self.afd.object('/profiles/' + profile.id + '/favorites', {preserveSnapshot: true}).take(1);;
    		favorites.subscribe(snapshot =>{
            var snap = snapshot.val();
            for (var key in snap){
              if(self.venue_link == snap[key].link){
                self._favorite();
                continue;
              }
            }
    		})
      });
  }

  favorite_venue(){
    var self = this;
    if(!this.favorited){
      this.profileService.favoriteVenue(this.venue_link,function(){
        self._favorite();
      });
    }else{
      this.profileService.unFavoriteVenue(this.venue_link,function(){
        self._unfavorite();
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
  _favorite(){
    //alert('fav');
    this.favorited = true;
    this.heart_image = 'assets/icons/scoutHEARTFULL.png';
  }

  _unfavorite(){
    //alert('unfav');
    this.favorited = false;
    this.heart_image = 'assets/icons/scoutHEART.png';
  }

}
