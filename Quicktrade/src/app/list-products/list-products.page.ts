import {Component, OnInit} from '@angular/core';
import {IMotor, IRealState, ITech} from '../interfaces';
import {VehiclesService} from '../services/VehiclesService';
import {RealStateService} from '../services/RealStateService';
import {TechService} from '../services/TechService';
import {ToastController} from '@ionic/angular';

@Component({
    selector: 'app-list-products',
    templateUrl: './list-products.page.html',
    styleUrls: ['./list-products.page.scss'],
})
export class ListProductsPage implements OnInit{

    vehicles: IMotor[] = [];

    houses: IRealState[] = [];

    techn: ITech[] = [];

    constructor(private _toastCtrl: ToastController, private motor: VehiclesService, private realState: RealStateService, private technology: TechService) {
    }


    ngOnInit() {
        let ref = this.motor.getVehicles();
        ref.on("value", snapshot => {
            snapshot.forEach(child => {
                let key = child.val();
                key.key = child.key;
                this.vehicles.push(key);
                console.log('He encontrado ' + child.key);
            });
        });

        let ref2 = this.technology.getTech();
        ref2.on('value', snapshot => {
            snapshot.forEach(child => {
                let key = child.val();
                key.key = child.key;
                this.techn.push(key);
            });
        });

        let ref3 = this.realState.getRealState();
        ref3.on('value', snapshot => {
            snapshot.forEach(child => {
                let key = child.val();
                key.key = child.key;
                this.houses.push(key);
            });
        });
    }

    clickButton() {

        this.presentToast();
    }

    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'This feature is not programmed, only works the details button located at VEHICLES.!',
            duration: 4000,
            position: 'middle'
        });
        toast.present();
    }
}
