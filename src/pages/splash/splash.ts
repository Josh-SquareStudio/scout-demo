import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../app/login.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { HomePage } from '../home/home'

@Component({
  selector: 'splash',
  templateUrl: 'splash.html',
  providers: [LoginService]
})
export class SplashPage implements OnInit{

  constructor(public navCtrl: NavController, private login: LoginService, private facebook: Facebook, public firebaseProvider: FirebaseProvider) {

  }

  ngOnInit(): void {

	}

	createUser(response){

	}

  loginFB(){
    this.facebook.login(["email"]).then((loginResponse) =>{

    	let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

    	firebase.auth().signInWithCredential(credential).then((info) =>{
    		//alert(JSON.stringify(info));
        this.checkUser();
    	})
    })
  }

  checkUser(){
    var self = this;
    this.facebook.getLoginStatus().then((response) =>{
      if (response.status === 'connected') {
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
        self.navCtrl.push(HomePage);
        self.navCtrl.setRoot(HomePage);
      } else if (response.status === 'not_authorized') {
        //TODO Redirect to splash screen
        alert('not authorized');
        //TODO Redirect to splash screen
      } else {
        alert('not logged in');
      }
    });
  }

}
