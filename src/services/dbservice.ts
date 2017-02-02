import {Injectable} from '@angular/core';
import {DataBase,db} from "./database";

@Injectable()
export class DBService {
    public db: DataBase;
    constructor() {
      this.db=db;
    }
    public getDatabase(){
        if(this.db==null){
            this.db = new DataBase();
        }
        return this.db;
    }
}
