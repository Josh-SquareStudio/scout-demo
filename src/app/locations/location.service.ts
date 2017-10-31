import { Injectable } from '@angular/core';

import { SearchLocation } from './search-location';
import { LOCATIONS } from './search-locations';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class LocationService {

	constructor(public afd: AngularFireDatabase) { }

  getSearchLocations(): Promise<SearchLocation[]> {
    return Promise.resolve(LOCATIONS);
  }

  getFirebaseLocation(location: SearchLocation, callback: any){
		var loc = this.afd.object('/locations/'+location.key, { preserveSnapshot: true });
		loc.subscribe(snapshot => {
      console.log(snapshot.val());
		  callback(snapshot.val());
		});
  }

  getListOfLocations(callback:any){
    var loc = this.afd.object('/locations', { preserveSnapshot: true });
    loc.subscribe(snapshot => {
      console.log(snapshot.val());
      callback(snapshot.val());
    });
  }

}