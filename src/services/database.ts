
import {Personne} from "../model/personne";

import Dexie from 'dexie';

export class DataBase extends Dexie {

    personne: Dexie.Table<Personne, number>;
 
    constructor() {   

        super("ToolterDB");

        var db = this;
        //
        // Define tables and indexes
        //
        db.version(1).stores({
            personne: '++id, firstName,lastName, displayName, photo',
        });

        db.personne.mapToClass(Personne);
    }
}
export var db = new DataBase();