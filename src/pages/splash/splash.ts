import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginService } from '../../app/login.service';


@Component({
  selector: 'splash',
  templateUrl: 'splash.html',
  providers: [LoginService]
})
export class SplashPage implements OnInit{

  constructor(public navCtrl: NavController, private login: LoginService) {
  	
  }

  ngOnInit(): void {

	}

	createUser(response){
		
	}

}
