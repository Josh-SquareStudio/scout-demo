import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../app/login.service';
import { HomePage } from '../home/home'

@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers: [LoginService]
})
export class LoginPage implements OnInit{

  constructor(public navCtrl: NavController, private login: LoginService) {
  	
  }

	ngOnInit(): void {

	}

	onLoginClick(location: Location){
    var self = this;
    this.login.login(function(){
      self.navCtrl.push(HomePage);
      self.navCtrl.setRoot(HomePage);
    });
  }

}
