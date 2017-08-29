import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../../pages/home/home';
import { ProfilePage } from '../../pages/profile/profile';
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

	account(){
		this.navCtrl.push(ProfilePage);
	}

	search(){
		this.navCtrl.setRoot(HomePage);
	}

	map(){
		
	}
}
