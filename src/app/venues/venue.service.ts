import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { SearchLocation } from '../../app/locations/search-location';
import { Location } from '../../app/locations/location';
import { Venue } from '../../app/venues/venue';

@Injectable()
export class VenueService {

	constructor(public afd: AngularFireDatabase) { }

  get_venues(type: String, location: SearchLocation, callback: any){
		var venues = this.afd.object('/'+type+'/'+location.key, { preserveSnapshot: true });
		venues.subscribe(snapshot => {
		  callback(snapshot.val());
		});
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