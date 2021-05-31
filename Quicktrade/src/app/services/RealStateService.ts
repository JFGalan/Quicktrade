import {Injectable} from '@angular/core';
import {IMotor, IRealState, ITech} from '../interfaces';
import firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';


@Injectable()

export class RealStateService {

    houses: IRealState [] = [];

    constructor(private _db: AngularFireDatabase) {

    }


    setHouses(house: IRealState) {
        const ref = this._db.database.ref('houses');
        ref.push(house);
    }

    getRealState(): firebase.database.Reference {
        const ref = this._db.database.ref('houses');
        return ref;
    }

    getRealStateById(key: string): IRealState[] {
        let ref = this._db.database.ref('houses');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.key === key) {
                    this.houses = child.val();
                }
            });
        });
        return this.houses;
    }

    updateRealState(id: number,
                    name: string,
                    description: string,
                    price: number,
                    key: string,
                    location: string,
                    squareMeters: number,
                    bathAndRooms: string,
                    userKey: string) {
        let ref = this._db.database.ref('houses');
        ref.child(key).set({
            id: id,
            name: name,
            description: description,
            price: price,
            location: location,
            squareMeters: squareMeters,
            bathAndRooms: bathAndRooms,
            userKey: userKey
        });
    }

    /*getRealState(): IRealState[] {
        return this.houses;
    }

    getRealStates(id: number): IRealState {
        if (this.houses.find(x => x.id === id)) {
            return this.houses.find(x => x.id === id);
        }
    }*/
}
