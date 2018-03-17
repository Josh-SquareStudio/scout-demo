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
import { Geolocation } from '@ionic-native/geolocation';

import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { FirebaseProvider } from '../providers/firebase/firebase';

import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { Facebook } from '@ionic-native/facebook';
import { AngularFireAuthModule } from 'angularfire2/auth';

//666bcf1d
/*Pro.init('666bcf1d', {
  appVersion: '0.1'
})*/

/*@Injectable()
export class MyErrorHandler implements ErrorHandler {
  ionicErrorHandler: IonicErrorHandler;

  constructor(injector: Injector) {
    try {
      this.ionicErrorHandler = injector.get(IonicErrorHandler);
    } catch(e) {
      // Unable to get the IonicErrorHandler provider, ensure
      // IonicErrorHandler has been added to the providers list below
    }
  }

  handleError(err: any): void {
    IonicPro.monitoring.handleNewError(err);
    // Remove this if you want to disable Ionic's auto exception handling
    // in development mode.
    this.ionicErrorHandler && this.ionicErrorHandler.handleError(err);
  }
}*/

// Initialize Firebase
var firebase_config = {
  apiKey: "AIzaSyA1S5Zv48ciri4AvvLC1aNBsQr21IXi2UQ",
  authDomain: "scout-f7b83.firebaseapp.com",
  databaseURL: "https://scout-f7b83.firebaseio.com",
  projectId: "scout-f7b83",
  storageBucket: "scout-f7b83.appspot.com",
  messagingSenderId: "166508255488"
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
    UtilService,
    Facebook,
    Geolocation,
    AngularFireAuthModule
  ]
})
export class AppModule {}
