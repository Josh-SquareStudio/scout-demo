import { Injectable } from '@angular/core';
import { Geolocation } from 'ionic-native';

@Injectable()
export class UtilService{

	browser:boolean;
	lat: number;
	lng: number;

	constructor() {
		this.browser = true;
		this.get_location(function(){});
	}

  get_location(callback): void{
    var self = this;
    Geolocation.getCurrentPosition().then(res => {
      self.lat = res.coords.latitude;
      self.lng = res.coords.longitude;
      callback();
    }).catch((error) => {
      console.log('Error getting location', error);
      callback();
    });
  }

  get_distance(lat,lng): number{
    return this.calculate_distance(this.lat,this.lng,lat,lng);
  }

	calculate_distance(lat1,lon1,lat2,lon2) {
	  var R = 6371; // Radius of the earth in km
	  var dLat = this.deg2rad(lat2-lat1);  // this.deg2rad below
	  var dLon = this.deg2rad(lon2-lon1); 
	  var a = 
	    Math.sin(dLat/2) * Math.sin(dLat/2) +
	    Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
	    Math.sin(dLon/2) * Math.sin(dLon/2)
	    ; 
	  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
	  var d = R * c; // Distance in km
	  return parseFloat(d.toFixed(2));
	}

	order_array_by(input, attribute) {
		var array = [];
		for(var objectKey in input) {
				array.push(input[objectKey]);
		}
		array.sort(function(a, b){
				a = parseInt(a[attribute]);
				b = parseInt(b[attribute]);
				return b - a;
		});
		return array;
	}

	deg2rad(deg) {
	  return deg * (Math.PI/180)
	}

	generate_key(k){
		return k.replace(/\s/g,'').toLowerCase();
	}

}