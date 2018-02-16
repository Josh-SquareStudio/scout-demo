import { Component, OnInit} from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';
import { VenueService } from '../../app/venues/venue.service';
import { VenueDetail } from '../venue-detail/venue-detail';
import { UtilService } from '../../app/util/util.service';
import { HeaderService } from '../../components/header/header.service';

@Component({
  selector: 'venue-list',
  templateUrl: 'venue-list.html',
  providers: [VenueService, HeaderService]
})
export class VenueList implements OnInit{

	venues: Venue[];
	location : Location;
  distances : number[];
  venue_type : string = "food";

  constructor(public navCtrl: NavController, private platform: Platform, public navParams: NavParams, private venueService: VenueService, private utils: UtilService , private headerService: HeaderService) {
  	this.location = this.navParams.get('location');
    this.format_location_name();
    this.venues = this.navParams.get('venues');
    this.headerService.venueListIcons();
  }

  ngOnInit(): void {
    this.select_top_venues();
    this.platform.ready().then(() => {
			this.get_distances(function(){});
		});
	}

  format_location_name(){
    var locationName = this.location.City_Plain;
    var p1, p2;
    var pos = locationName.lastIndexOf(' ');
    locationName = locationName.substring(0,pos) + ', ' + locationName.substring(pos+1);
    p1 = locationName.slice(0, locationName.length - 2);
    p2 = locationName.slice(locationName.length - 2);
    p2 = p2.toUpperCase();
    this.location.City_Plain = p1 + p2;
  }

  change_type(type : string){
    this.venue_type = type;
    console.log(this.venue_type);
    var self = this;
    self.venueService.get_venues(this.venue_type,this.location,function(venues){
      self.venues = venues;
      self.select_top_venues();
      self.get_distances(function(){});
    });
  }

  filterFollowers(minimumFollowers){
    var venues = [];
    for(var i = 0; i < this.venues.length; i++){
      if(this.venues[i].followers > 300){
        venues.push(this.venues[i]);
      }
    }
    this.venues = venues;
  }

  select_top_venues(): void{
    this.venues = this.utils.order_array_by(this.venues,'followers');
    console.log(this.location.Population);

    var min,max,divisor;
    var minimumFollowers = 300;

    this.filterFollowers(minimumFollowers);

    if(this.location.Population){
      if(this.venue_type == "food"){
        min = 2;
        max = 30;
        divisor = 40000;
      }else{
        min = 1;
        max = 20;
        divisor = 30000;
      }

      var num_results = Math.round(this.location.Population/divisor);

      if(num_results > max){
        num_results = max;
      }else if(num_results < min){
        num_results = min;
      }
    }else{
      if(this.venue_type == "food"){
        num_results = 10;
      }else{
        num_results = 5;
      }
    }

    this.venues = this.venues.slice(0,num_results);
  }

  get_distances(callback): void{
    var self = this;
    this.utils.get_location(function(){
      for(var i=0; i<self.venues.length; i++){
        self.venues[i].distance = self.utils.get_distance(self.venues[i].lat,self.venues[i].lng);
        //console.log(this.venues[i].lat,this.venues[i].lng);
        //console.log(this.utils.get_distance(this.venues[i].lat,this.venues[i].lng));
        self.venues[i].interactions = Math.round(self.venues[i].followers * 1.38);
      }
    });
  }

  onSelect(venue: Venue){
    var self = this;
    this.venueService.get_venue_media('food',this.location,venue,function(media){
      self.navCtrl.push(VenueDetail, {
        venue : venue,
        media : media,
        venue_link : 'food/'+self.location.key+'/'+venue.key
      });
    });
  }

}
