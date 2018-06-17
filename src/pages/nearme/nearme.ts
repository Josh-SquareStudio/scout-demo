import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content } from 'ionic-angular';
import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';
import { HeaderService } from '../../components/header/header.service';
import { UtilService } from '../../app/util/util.service';
import { VenueService } from '../../app/venues/venue.service';
import { VenueDetail } from '../venue-detail/venue-detail';
import jQuery from 'jquery';

@Component({
  selector: 'page-nearme',
  templateUrl: 'nearme.html',
  providers: [VenueService, HeaderService]
})
export class NearmePage {

  @ViewChild(Content)
  content: Content;
  venues: Venue[];
  venue_type : string;
  search_radius : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, private headerService : HeaderService, private venueService : VenueService, private utils: UtilService) {
    this.headerService.nearmeIcons();
    this.venue_type = "food";
    this.search_radius = 1;
    this.venues = [];
    this.find_nearby_venues();
  }

  ngAfterViewInit() {
    var offset = jQuery('.main-container').offset().top;
    this.content.ionScroll.subscribe((event: any) => {;
      if (event.scrollTop >= offset) {
        jQuery('.fixed-header').show();
        //jQuery('.list').addClass("buttonPadded");
      } else {
        jQuery('.fixed-header').hide();
      }
    });
  }

  cutCategory(str) {
    var s = str.split(" ");
    return s[0];
  }

  add_venue(venue: Venue){
    venue.interactions = (Math.round(venue.followers * 1.38)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    venue.open_status = this.venueService.check_if_open(venue);
    venue.distance = this.utils.get_distance(venue.lat,venue.lng);
    venue.category.name = this.cutCategory(venue.category.name);
    this.venues.push(venue);
    console.log(venue);
  }

  find_nearby_venues(){
    var self = this;
    this.venueService.get_venues_within_range(this.search_radius, this.venue_type, function(venue){
      if(self.venue_type == 'coffee'){
        if(venue.name != undefined && venue.followers > 300 && self.venues.length < 10){
          self.add_venue(venue);
        }
      }else{
        if(venue.name != undefined && venue.followers > 300 && self.venues.length < 25){
          self.add_venue(venue);
        }
      }
      console.log(self.venues);
      self.venues.sort(self.compareDistance);
      //self.utils.order_array_by(self.venues, 'distance');
      //self.venues.reverse();
    });
  }

  compareDistance(a, b) {
    console.log("a:");
    console.log(a);
    if (a.distance < b.distance)
      return -1;
    if (a.distance > b.distance)
      return 1;
    return 0;
  }

  change_type(type : string){
    this.venue_type = type;
    this.venues = [];
    this.find_nearby_venues();
  }

  onSelect(venue: Venue){
    var self = this;
    console.log(venue);
    var key = venue.location.replace(/\s/g, "").toLowerCase();
    this.venueService.get_venue_nearme_media('food',key,venue,function(media){
      self.navCtrl.push(VenueDetail, {
        venue : venue,
        media : media,
        venue_link: venue.type + "/" + self.utils.generate_key(venue.location) + "/" + venue.fbkey
      });
    });
  }
}
