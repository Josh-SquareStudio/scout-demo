import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { VenueList } from '../pages/venue-list/venue-list';
import { VenueDetail } from '../pages/venue-detail/venue-detail';
import { ProfilePage } from '../pages/profile/profile';
import { HeaderComponent } from '../components/header/header.component';

import { ProfileService } from '../pages/profile/profile.service';
import { UtilService } from './util/util.service';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

// Initialize Firebase
var firebase_config = {
  apiKey: "AIzaSyC4NpwiPVi-0bYfL9Q0JT5pcrDKYujPt3Y",
  authDomain: "c-i-t-y.firebaseapp.com",
  databaseURL: "https://c-i-t-y.firebaseio.com",
  projectId: "c-i-t-y",
  storageBucket: "c-i-t-y.appspot.com",
  messagingSenderId: "438025464632"
};

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '280e91b9'
  }
};

@NgModule({
  declarations: [
    MyApp,
    SplashPage,
    LoginPage,
    HomePage,
    VenueList,
    VenueDetail,
    ProfilePage,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebase_config),
    CloudModule.forRoot(cloudSettings),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SplashPage,
    LoginPage,
    HomePage,
    VenueList,
    VenueDetail,
    ProfilePage,
    HeaderComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    ProfileService,
    UtilService
  ]
})
export class AppModule {}
