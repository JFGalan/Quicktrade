import {Injectable} from '@angular/core';
import {IUser} from '../interfaces';
import firebase from 'firebase';
import {AngularFireDatabase} from '@angular/fire/database';

@Injectable()

export class UsersService {
    users: IUser [] = [];
    id: number;

    constructor(private _db: AngularFireDatabase) {
    }

    getUsers(): firebase.database.Reference {
        const ref = this._db.database.ref('users');
        return ref;
    }

    getUsersById(key: string): IUser[] {
        let ref = this._db.database.ref('users');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.key === key) {
                    this.users = child.val();
                }
            });
        });
        return this.users;
    }

    getUsersByName(id: number): IUser[] {
        let ref = this._db.database.ref('users');
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.val().id === id) {
                    this.users = child.val();
                }
            });
        });
        return this.users;
    }

}
