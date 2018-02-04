import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';

@Injectable()
export class VenueService {

	constructor(public afd: AngularFireDatabase) { }

  get_venues(type: String, location: any, callback: any){
		var venues = this.afd.object('/'+type+'/'+location.key, { preserveSnapshot: true });
		venues.subscribe(snapshot => {
		  callback(snapshot.val());
		});
  }

	get_venue_price(type: String, venueID){
		this.httpGet("https://api.foursquare.com/v2/venues/"+venueID, function(body){
			return body.response.venue.price.tier;
		})
	}

	httpGet(theUrl, callback){
	    var xmlHttp = new XMLHttpRequest();
	    xmlHttp.onreadystatechange = function() {
	        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
	            callback(xmlHttp.responseText);
	    }
	    xmlHttp.open("GET", theUrl, true); // true for asynchronous
	    xmlHttp.send(null);
	}

  get_favorite_venue(venueString: string, callback: any){
    var venue = this.afd.object(venueString, { preserveSnapshot: true });
    venue.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  get_favorite_venue_media(venueString: string, callback: any){
    var venue = this.afd.object(venueString, { preserveSnapshot: true });
    venue.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

  get_venue_media(type: String, location: Location, venue: Venue, callback: any){
    var media = this.afd.object('media/'+location.key+'/'+venue.key, { preserveSnapshot: true });
    media.subscribe(snapshot => {
      callback(snapshot.val());
    });
  }

}
