import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

	show_map : boolean;
	show_account : boolean;
	show_search : boolean;
	show_left_back : boolean;
	show_right_back : boolean;

	constructor() {
		this.show_map = false;
	}

	homeIcons(){
		this.showMap(true);
		this.showAccount(true);
		this.showSearch(false);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	venueListIcons(){
		this.showMap(true);
		this.showAccount(true);
		this.showSearch(true);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	venueDetailIcons(){
		this.showMap(false);
		this.showAccount(true);
		this.showSearch(false);
		this.showLeftBack(false);
		this.showRightBack(true);
	}

	profileIcons(){
		this.showMap(false);
		this.showAccount(false);
		this.showSearch(true);
		//this.showLeftBack(true);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	splashIcons(){
		this.showMap(false);
		this.showAccount(false);
		this.showSearch(false);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	showMap(b){
		this.show_map = b;
	}

	showAccount(b){
		this.show_account = b;
	}

	showSearch(b){
		this.show_search = b;
	}

	showLeftBack(b){
		this.show_left_back = b;
	}

	showRightBack(b){
		this.show_right_back = b;
	}
}
