import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { SearchLocation } from '../../app/locations/search-location';
import { LocationService } from '../../app/locations/location.service';
import { VenueService } from '../../app/venues/venue.service';
import { VenueList } from '../venue-list/venue-list'
import { HeaderService } from '../../components/header/header.service';
import { Geolocation } from '@ionic-native/geolocation';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LocationService,VenueService,HeaderService]
})
export class HomePage implements OnInit{

  searchQuery: string = '';
  locations: SearchLocation[];
  filter_locations : SearchLocation[];
  showNearMe = true;

  constructor(public navCtrl: NavController, private locationService: LocationService, private venue_service: VenueService, private headerService: HeaderService, private geo: Geolocation, private platform: Platform) {
    this.headerService.showMap(true);
  }

  format_location_name(locationName: string){
    var p1, p2;
    var pos = locationName.lastIndexOf(' ');
    locationName = locationName.substring(0,pos) + ', ' + locationName.substring(pos+1);
    p1 = locationName.slice(0, locationName.length - 2);
    p2 = locationName.slice(locationName.length - 2);
    p2 = p2.toUpperCase();
    return p1 + p2;
  }

  ngOnInit(): void {
	  this.getSearchLocations();
    this.headerService.homeIcons();
    this.setLocation();
	}

  setLocation() {
     this.platform.ready().then(() => {
        return this.geo.getCurrentPosition()
                       .then(pos => {});
     });
  }

  getSearchLocations() {
    var self = this;
    this.locationService.getListOfLocations(function(locations){
      self.locations = [];
      for(var key in locations){
        self.locations.push({name:self.format_location_name(locations[key].City_Plain),key:key});
      }
    })
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.filter_locations = this.locations;

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.filter_locations = this.filter_locations.filter((location) => {
        return (location.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
      this.showNearMe = false;
    }
    else{
    	this.filter_locations = [];							//make list empty if search string is
      this.showNearMe = true;
    }
  }

  onSelect(location: SearchLocation){
    var self = this;
    this.locationService.getFirebaseLocation(location,function(firebase_location){
      self.venue_service.get_venues("food",location,function(venues){
        self.navCtrl.push(VenueList, {
          location : firebase_location,
          venues : venues,
        });
      });
    });
  }

}
