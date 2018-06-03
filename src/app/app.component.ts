import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { SplashPage } from '../pages/splash/splash';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';

declare var TestFairy: any;

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  //forever start /usr/local/bin/http-server /home/ec2-user/scout-demo/www
  rootPage:any = SplashPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      if (platform.is('android')) {
          statusBar.overlaysWebView(false);
          statusBar.styleDefault();
      }
      splashScreen.hide();
      TestFairy.begin("7a5cb39e8543159f61ffe5483fe5f0e9f1c22d33");
    });
  }
}
