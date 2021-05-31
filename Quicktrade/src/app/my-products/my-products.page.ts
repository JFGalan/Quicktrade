import {Component, OnInit} from '@angular/core';
import {IMotor, IRealState, ITech, IUser} from '../interfaces';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../services/VehiclesService';
import {TechService} from '../services/TechService';
import {RealStateService} from '../services/RealStateService';
import {UsersService} from '../services/UsersService';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-my-products',
    templateUrl: './my-products.page.html',
    styleUrls: ['./my-products.page.scss'],
})
export class MyProductsPage implements OnInit {
    id: number;
    motor: IMotor[] = [];
    tech: ITech[] = [];
    inmo: IRealState[] = [];
    user: IUser[] = [];
    name: string = 'Jesús';
    key: string = this.getKey(this.name);


    constructor(private _toastCtrl: ToastController, private _activatedRoute: ActivatedRoute, private _vechiclesService: VehiclesService, private _techService: TechService, private _realState: RealStateService, private _user: UsersService) {
    }

    ngOnInit() {
    }

    getKey(name: string): string {
        let ref = this._user.getUsers();
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.val().name === name) {
                    this.key = child.key;
                    this.getMyPrVeh(this.key);
                    this.getMyPrRealS(this.key);
                    this.getMyPrTech(this.key);
                }
            });
            return this.key;
        });
        return null;
    }

    getMyPrVeh(key) {

        let ref = this._vechiclesService.getVehicles();

        ref.orderByChild('userKey').equalTo(key).once('value', snapshot => {

            snapshot.forEach(child => {

                let veh = child.val();

                veh.key = child.key;

                this.motor.push(veh);

                console.log(this.motor);

            });
            console.log("key: "+this.motor[0].userKey);
        });
    }

    getMyPrRealS(key) {
        let ref = this._realState.getRealState();
        ref.orderByChild('userKey').equalTo(key).on('value', snapshot => {
            snapshot.forEach(child => {
                let inmob = child.val();
                inmob.key = child.key;
                this.inmo.push(inmob);
                console.log(this.inmo);
            });
        });
    }

    getMyPrTech(key) {
        let ref = this._techService.getTech();
        ref.orderByChild('userKey').equalTo(key).on('value', snapshot => {
            snapshot.forEach(child => {
                let tech = child.val();

                tech.key = child.key;

                this.tech.push(tech);
                console.log(this.tech);
            });
        });
    }

    deleteProductVehicle(id) {
        let ref = this._vechiclesService.getVehicles();
        ref.orderByChild('id').equalTo(id).on('value', snapshot => {
            snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
            });
        });
    }

    deleteProductInmo(id) {
        let ref = this._realState.getRealState();
        ref.orderByChild('id').equalTo(id).on('value', snapshot => {
            snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
                this.presentToast();
            });
        });
    }

    deleteProductTech(id) {
        let ref = this._techService.getTech();
        ref.orderByChild('id').equalTo(id).on('value', snapshot => {
            snapshot.forEach(child => {
                let clave = child.key;
                ref.child(clave).remove();
            });
        });
    }

    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'Your product has been removed!',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

}
