import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { LoginService } from '../../app/login.service';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { FirebaseProvider } from './../../providers/firebase/firebase';
import { FirebaseListObservable } from 'angularfire2/database';
import firebase from 'firebase';
import { HomePage } from '../home/home';
import { AngularFireAuth } from 'angularfire2/auth';
import { HeaderService } from '../../components/header/header.service';

//declare var Appsee:any;

@Component({
  selector: 'splash',
  templateUrl: 'splash.html',
  providers: [HeaderService, LoginService, AngularFireAuth]
})
export class SplashPage implements OnInit{

  constructor(
    public navCtrl: NavController,
    private login: LoginService,
    private facebook: Facebook,
    public firebaseProvider: FirebaseProvider,
    private afAuth: AngularFireAuth,
    private platform: Platform,
    private headerService: HeaderService,
  ){
    this.headerService.splashIcons();
    this.platform.ready().then(()=> {
       //Appsee.start("67bddf300a8642ac91953da588d7559a");
    });
  }

  ngOnInit(): void {
    var self = this;
    firebase.auth().onAuthStateChanged(function(user) {
		  if (user) {
        self.navCtrl.push(HomePage);
        self.navCtrl.setRoot(HomePage);
      }
    });
	}

	createUser(response){

	}

  loginFB(){
    //this.loginBrowser();
    if (this.platform.is('cordova')){
      alert("loginapp");
      this.loginApp();
    }else{
      alert("loginbrowser");
      this.loginBrowser();
    }
  }

  loginApp(){
    var self = this;
    this.facebook.login(["email"]).then((loginResponse) =>{
    	let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken);

    	firebase.auth().signInWithCredential(credential).then((info) =>{
        self.navCtrl.push(HomePage);
        self.navCtrl.setRoot(HomePage);
    	})
    });
  }

  loginBrowser(){
    var self = this;
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('email');
    firebase.auth().signInWithPopup(provider).then(function(result) {
      var token = result.credential.accessToken;
      var user = result.user;
      self.navCtrl.push(HomePage);
      self.navCtrl.setRoot(HomePage);
    }).catch(function(error) {
      alert(error);
      /*// Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...*/
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
