
import {db} from "../services/database";

export class Personne {
    public id: number;
    public firstName: string;
    public lastName: string;
    public displayName: string;
    public photo: string;    

    constructor(id?:number) {
        if (id) this.id = id;
    }

    save() {
        return  db.transaction('rw',  db.personne, () => {
                         db.personne.put(this).then(id =>{
                               this.id = id;         
                         });
                   });
    
    }
}