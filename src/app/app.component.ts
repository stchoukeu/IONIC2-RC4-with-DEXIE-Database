import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import {Personne} from '../model/personne';

import { HomePage } from '../pages/home/home';
import {DBService} from "../services/dbservice";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = HomePage;
  
  constructor(platform: Platform,public dbserv: DBService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
	      let p= new Personne();
		   p.firstName="simplice";
		   p.lastName="TCHOUKEU";
		   p.displayName="TSA";
		   p.photo= '';
		   
		 //  this.dbserv.db.open();
	  this.dbserv.db.transaction('rw',this.dbserv.db.personne, () => {	   
		   this.dbserv.db.personne.put(p).then(nbre=>{
   
           });
	  });
		 
    });
  }
}
