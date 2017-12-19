import { Injectable } from '@angular/core';
import { Auth, User } from '@ionic/cloud-angular';
import { CityUser } from './user/user';

@Injectable()
export class LoginService {

	user:CityUser;

  constructor(public auth: Auth, public insta_info: User) {

  }

	login(callback):void {
		var self = this;
	  this.auth.login('instagram').then(function(response){
	  	self.createUser(response);
	  	callback();
	  });
	}

	createUser(response){
		this.user = {
			access_token : response.token,
    	user_id : this.insta_info.social.instagram.data.username,
    	full_name : this.insta_info.social.instagram.data.full_name,
    	profile_picture : this.insta_info.social.instagram.data.profile_picture,
			instagram_raw_data : this.insta_info.social.instagram.data.raw_data
		}
		console.log(this.user);
	}

	getUser():CityUser{
		return this.user;
	}
}
