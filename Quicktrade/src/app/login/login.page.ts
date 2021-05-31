import {Component, OnInit} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {UsersService} from '../services/UsersService';
import {IUser} from '../interfaces';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    title: string = 'Quicktrade';
    title2: string = 'Login';
    userName: string;
    users: IUser[] = [];
    id: number;

    constructor(private _toastCtrl: ToastController, private _user: UsersService) {
    }

    ngOnInit() {
        let ref = this._user.getUsers();
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                const value: IUser = child.val();
                this.users.push(value);
                this.id = this.users[0].id;
            });
        });
    }

    show(){
        console.log('El id es: '+ this.id);
    }
}
