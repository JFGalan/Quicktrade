import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UsersService} from '../services/UsersService';
import {IUser} from '../interfaces';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

    title: string = 'Quicktrade';
    id: number;
    userKey: string;
    user: IUser[] = [];

    constructor(private _activatedRoute: ActivatedRoute, private _users: UsersService) {
    }

    ngOnInit() {
        this.id = +this._activatedRoute.snapshot.paramMap.get('id');
        console.log(this.id);
        this.getKey();
        this.user = this._users.getUsersById(this.userKey);
    }

    getKey() {
        let ref = this._users.getUsers();
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.val().id === this.id) {
                    this.userKey = child.key;
                }
            });
        });
    }
}
