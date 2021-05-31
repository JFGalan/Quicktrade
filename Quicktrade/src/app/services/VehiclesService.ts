import {Injectable} from '@angular/core';
import {IMotor} from '../interfaces';
import {AngularFireDatabase} from '@angular/fire/database';
import firebase from 'firebase';

@Injectable()

export class VehiclesService {

    vehicles: IMotor[] = [];

    constructor(private _db: AngularFireDatabase) {

    }

    setVehicles(vehicle: IMotor) {
        const ref = this._db.database.ref('vehicles');
        ref.push(vehicle);
    }

    getVehicles(): firebase.database.Reference {
        const ref = this._db.database.ref('vehicles');
        return ref;
    }

    getVehicleById(key: string): IMotor[] {
        let ref = this._db.database.ref('vehicles');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.key === key) {
                    this.vehicles = child.val();
                }
            });
        });
        return this.vehicles;
    }

    updateMotor(id: number,
                name: string,
                description: string,
                price: number,
                key: string,
                km: number,
                year: number,
                type: string,
                userKey: string) {

        let ref = this._db.database.ref('vehicles');
        ref.child(key).set({
            id: id,
            name: name,
            description: description,
            price: price,
            km: km,
            year: year,
            type: type,
            userKey: userKey
        });
    }

    /*getVehicle(id: number): IMotor {
         let motor: IMotor[] = this.getVehicles();
     }*/
}

/*
 */
/*


 */
