import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Venue } from '../../app/venues/venue';
import { Media } from '../../app/media/media';
import { UtilService } from '../../app/util/util.service';
import { HeaderService } from '../../components/header/header.service';
import { ProfileService } from '../profile/profile.service';
import { Platform } from 'ionic-angular'; //for checking if device is ios for different maps app
import { AngularFireDatabase } from 'angularfire2/database';
import jQuery from "jquery";
import firebase from 'firebase';

declare var google;

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
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  opening_hours: string;

  constructor(private afd: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private utils: UtilService, private headerService: HeaderService, private profileService: ProfileService, private plt: Platform) {
  	this.venue = this.navParams.get('venue');
  	this.media = this.navParams.get('media');
    this.venue_link = this.navParams.get('venue_link');
  	this.top_media = [];
    this.favorited = false;
    this.opening_hours = "";
    this.heart_image = 'assets/icons/scoutHEART.png';
    this.headerService.venueDetailIcons();
    this.checked = false;
    this.formatOpeningHours();
    //this.venue.category.name = this.cutCategory(this.venue.category.name);
  }

	ngOnInit(): void {
    this.rank_latest_media();
    this.check_favorite();
    this.venue.distance = this.utils.get_distance(this.venue.lat,this.venue.lng);
    this.initJquery();
    this.checkWebsite();
    this.checkPhone();
	}

  ionViewDidLoad(){
    this.loadMap();
  }

  formatOpeningHours(){
    if(typeof this.venue.opening_hours === "string"){
      return;
    }

    var text = "";
    var prevDay = 1;
    var streak = false;
    for(var key in this.venue.opening_hours){
      var obj = this.venue.opening_hours[key];
      console.log(obj);
      var days = obj.days;

      for(var i = 0; i < days.length; i++){
        console.log(days[i] + " " + prevDay);
        if(prevDay - days[i] == 0 || i == days.length - 1){
          if(i > 0 && i != days.length - 1){
            text+=", ";
          }
          switch(days[i]){
            case 1: text+="Mon"; prevDay = 1; break;
            case 2: text+="Tue"; prevDay = 2; break;
            case 3: text+="Wed"; prevDay = 3; break;
            case 4: text+="Thu"; prevDay = 4; break;
            case 5: text+="Fri"; prevDay = 5; break;
            case 6: text+="Sat"; prevDay = 6; break;
            case 7: text+="Sun"; prevDay = 7; break;
          }
          streak = false;
        }else{
          if(!streak){
            switch(days[i]){
              case 1: text+="-"; prevDay = 1; break;
              case 2: text+="-"; prevDay = 2; break;
              case 3: text+="-"; prevDay = 3; break;
              case 4: text+="-"; prevDay = 4; break;
              case 5: text+="-"; prevDay = 5; break;
              case 6: text+="-"; prevDay = 6; break;
              case 7: text+="-"; prevDay = 7; break;
            }
            streak = true;
          }
        }
      }

      var start = obj.open[key].start;
      var end = obj.open[key].end;

      if(start < 1200){
        start += " AM";
      }else{
        start -= 1200;
        start += " PM";
      }

      if(end < 1200){
        end += " AM";
      }else{
        end -= 1200;
        end += " PM";
      }

      start = [start.slice(0, 2), ":", start.slice(2)].join('');
      end = [end.slice(0, 2), ":", end.slice(2)].join('');

      text += " " + start;
      text += "-" + end + "\n";
      console.log(text);
    }
    this.opening_hours = text;
  }

  loadMap(){
    let venuePosition = {lat: this.venue.lat, lng: this.venue.lng};
    var map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 15,
      center: venuePosition,
      scaleControl: false,
      draggable: false,
      disableDefaultUI: true
    });

    var marker = new google.maps.Marker({
      position: venuePosition,
      map: map
    });

    this.map = new google.maps.Map(this.mapElement.nativeElement, map);
  }

  cutCategory(str){
    var s = str.split(" ");
    return s[0];
  }

  checkWebsite(){
    if(this.venue.external_url == ""){
      jQuery('.website').css('opacity', '.5');
      jQuery('.website a').attr("href", "#");
    }
  }

  checkPhone(){
    if(this.venue.phone == ""){
      jQuery('.call').css('opacity', '.5');
      jQuery('.call a').attr("href", "#");
    }
  }

  initJquery(){
    jQuery('.flag').click(function(){
      jQuery('.oops-dialog').fadeIn(375);
    })
    jQuery('.dialog-close-button').click(function(){
      jQuery('.oops-dialog').fadeOut(375);
    });
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

  flag_venue(reason){
    var key = this.venue.name + ' ' + this.venue.location;
    this.profileService.flagVenue(key, reason);
    jQuery('.oops-dialog').fadeOut(375);
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
