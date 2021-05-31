import {Injectable} from '@angular/core';
import {ITech} from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';
import firebase from 'firebase';

@Injectable()

export class TechService {

    tech: ITech[] = [];

    constructor(private _db: AngularFireDatabase) {

    }

    setTech(tech: ITech) {
        const ref = this._db.database.ref('technology');
        ref.push(tech);
    }


    getTech(): firebase.database.Reference {
        const ref = this._db.database.ref('technology');
        return ref;
    }

    getTechById(key: string): ITech[] {
        let ref = this._db.database.ref('technology');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.key === key) {
                    this.tech = child.val();
                }
            });
        });
        return this.tech;
    }

    updateTech(id: number,
               name: string,
               description: string,
               price: number,
               key: string,
               state: string,
               userKey: string) {

        let ref = this._db.database.ref('technology');
        ref.child(key).set({
            id: id,
            name: name,
            description: description,
            price: price,
            state: state,
            userKey: userKey
        });
    }

}
