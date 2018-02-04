import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';
import { LoginPage } from '../../pages/login/login';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent{


	constructor(public navCtrl: NavController, private headerService: HeaderService) {}

	back(){
		this.navCtrl.pop();
	}

  login(){
    this.navCtrl.push(LoginPage);
  }

	account(){
		this.navCtrl.setRoot(ProfilePage);
	}

	search(){
		this.navCtrl.setRoot(HomePage);
	}

	map(){

	}
}
