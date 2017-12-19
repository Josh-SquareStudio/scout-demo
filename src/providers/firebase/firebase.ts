import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/*
  Generated class for the FirebaseProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class FirebaseProvider {

  constructor(public http: Http, public afd: AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  registerUser(userData) {
    //this.afd.object('/profiles/${userData}').$ref.transaction(currentValue => {
      //if (currentValue === null) {
        //user does not exist, create new profile
        this.afd.list('/profiles/').push(userData);
      //} else {
        //user exists, log them in
      //}
  //  })
  }


}
