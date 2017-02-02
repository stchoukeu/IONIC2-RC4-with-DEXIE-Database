import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {DBService} from "../../services/dbservice";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public nombre:number;
  constructor(public navCtrl: NavController,public dbserv: DBService) {
       this.dbserv.db.personne.count().then(nbre=>{
                if(!nbre){ this.nombre=0; }else{
                   this.nombre=nbre;
                }
                
             });
  }

}
