import { Injectable } from '@angular/core';

@Injectable()
export class HeaderService {

	show_map : boolean;
	show_left_account : boolean;
	show_right_account : boolean;
	show_left_search : boolean;
	show_right_search : boolean;
	show_left_back : boolean;
	show_right_back : boolean;

	constructor() {
		this.show_map = false;
	}

	homeIcons(){
		this.showMap(false);
		this.showLeftAccount(true);
		this.showRightAccount(false);
		this.showLeftSearch(false);
		this.showRightSearch(false);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	venueListIcons(){
		this.showMap(true);
		this.showLeftAccount(false);
		this.showRightAccount(true);
		this.showLeftSearch(true);
		this.showRightSearch(false);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	venueDetailIcons(){
		this.showMap(false);
		this.showLeftAccount(false);
		this.showRightAccount(true);
		this.showLeftSearch(false);
		this.showRightSearch(false);
		this.showLeftBack(true);
		this.showRightBack(false);
	}

	profileIcons(){
		this.showMap(false);
		this.showLeftAccount(false);
		this.showRightAccount(false);
		this.showLeftSearch(false);
		this.showRightSearch(false);
		this.showLeftBack(true);
		this.showRightBack(false);
	}

	splashIcons(){
		this.showMap(false);
		this.showLeftAccount(false);
		this.showRightAccount(false);
		this.showLeftSearch(false);
		this.showRightSearch(false);
		this.showLeftBack(false);
		this.showRightBack(false);
	}

	nearmeIcons(){
		this.showMap(false);
		this.showLeftAccount(false);
		this.showRightAccount(true);
		this.showLeftSearch(false);
		this.showRightSearch(false);
		this.showLeftBack(true);
		this.showRightBack(false);
	}

	showMap(b){
		this.show_map = b;
	}

	showLeftAccount(b){
		this.show_left_account = b;
	}

	showRightAccount(b){
		this.show_right_account = b;
	}

	showLeftSearch(b){
		this.show_left_search = b;
	}

	showRightSearch(b){
		this.show_right_search = b;
	}

	showLeftBack(b){
		this.show_left_back = b;
	}

	showRightBack(b){
		this.show_right_back = b;
	}
}
