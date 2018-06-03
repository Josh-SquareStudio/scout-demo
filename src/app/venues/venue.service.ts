import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import * as GeoFire from "geofire";
import { UtilService } from '../../app/util/util.service';

import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';

@Injectable()
export class VenueService {

  dbRef: any;
  geoFire: any;
  geoQuery: any;
  venues: Venue[];

  constructor(public afd: AngularFireDatabase, private utils: UtilService) {
    this.dbRef = this.afd.list('/venue_locations');
    this.geoFire = new GeoFire(this.dbRef.$ref);
    this.venues = [];
  }

  check_if_open(venue: Venue) {
    if (typeof venue.opening_hours === "string") {
      return 0; //unknown
    }

    var timeValue = 0;
    var currentTime = new Date();
    var currentDay = currentTime.getDay();
    if (currentDay == 0){ //sunday is 7 but getDay() makes it 0
      currentDay = 7;
    }
    timeValue += currentTime.getHours() * 100;
    timeValue += currentTime.getMinutes();

    for (var key in venue.opening_hours) {
      var obj = venue.opening_hours[key];

      for (var i = 0; i < obj.days.length; i++) {
        if (obj.days[i] == currentDay) {
          var start = obj.open[0].start;
          var end = obj.open[0].end;

          if (start < timeValue && timeValue < end) {
            return 1; //open
          } else {
            return 2; //closed
          }
        }
      }
    }
    return 0; //unknown
  }

  get_venues_within_range(range: number, type: string, callback: any) {
    var self = this;
    this.utils.get_location(function(resp) {
      self.geoQuery = self.geoFire.query({
        center: [resp.lat, resp.lng],
        radius: 25
      });
      self.geoQuery.on("key_entered", (key, location, distance) => {
        self.afd.object('/alldata/' + type + '/' + key).subscribe((venue) => {
          console.log(venue);
          callback(venue);
        });
      });
    });
  }

  get_venues(type: String, location: any, callback: any) {
    var venues = this.afd.object('/' + type + '/' + location.key, { preserveSnapshot: true });
    venues.subscribe(snapshot => {
      console.log(snapshot.val());
      callback(snapshot.val());
    });
    this.geoFire = new GeoFire(this.afd.list('/venue_locations').$ref);
  }

  get_venue_price(type: String, venueID) {
    this.httpGet("https://api.foursquare.com/v2/venues/" + venueID, function(body) {
      return body.response.venue.price.tier;
    })
  }

  httpGet(theUrl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
  }

  get_favorite_venue(venueString: string, callback: any) {
    var venue = this.afd.object(venueString, { preserveSnapshot: true });
    venue.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  get_favorite_venue_media(venueString: string, callback: any) {
    var venue = this.afd.object(venueString, { preserveSnapshot: true });
    venue.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  get_venue_media(type: String, location: Location, venue: Venue, callback: any) {
    var media = this.afd.object('media/' + location.key + '/' + venue.key, { preserveSnapshot: true });
    media.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  get_venue_nearme_media(type: String, key: String, venue: Venue, callback: any) {
    var media = this.afd.object('media/' + key + '/' + venue.key, { preserveSnapshot: true });
    media.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

}
