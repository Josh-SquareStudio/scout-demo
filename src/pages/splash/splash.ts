import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoginService } from '../../app/login.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'splash',
  templateUrl: 'splash.html',
  providers: [LoginService, AngularFireAuth]
})
export class SplashPage implements OnInit{

  constructor(
    public navCtrl: NavController,
    private login: LoginService,
    private facebook: Facebook,
    public firebaseProvider: FirebaseProvider,
    private afAuth: AngularFireAuth,
    private platform: Platform
  ){}

  ngOnInit(): void {
    this.checkUser(); //if the user is already logged in, get their info and move on
	}

	createUser(response){

	}

  loginFB(){
    var self = this;
    return this.facebook.login(["email"]).then((loginResponse) =>{
    	let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

    	firebase.auth().signInWithCredential(credential).then((info) =>{
        self.navCtrl.push(HomePage);
        self.navCtrl.setRoot(HomePage);
    	})
    });
  }


    /*this.facebook.login(["email"]).then((loginResponse) =>{
    	let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

    	firebase.auth().signInWithCredential(credential).then((info) =>{
        this.checkUser();
    	})
    });*/
    //this.navCtrl.push(HomePage);
    //this.navCtrl.setRoot(HomePage);

  checkUser(){
    var self = this;
    this.facebook.getLoginStatus().then((response) =>{
      if (response.status === 'connected') {
        self.navCtrl.push(HomePage);
        self.navCtrl.setRoot(HomePage);
      }
    });
  }

}
