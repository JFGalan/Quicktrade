import {Component, OnInit} from '@angular/core';
import {IMotor, IRealState, ITech} from '../interfaces';
import {ToastController} from '@ionic/angular';
import {VehiclesService} from '../services/VehiclesService';
import {RealStateService} from '../services/RealStateService';
import {TechService} from '../services/TechService';
import {UsersService} from '../services/UsersService';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-insert-products',
    templateUrl: './insert-products.page.html',
    styleUrls: ['./insert-products.page.scss'],
})
export class InsertProductsPage implements OnInit {

    title: string = 'Quicktrade';
    route1: string = '../../assets/car-bikes.jpg';
    route2: string = '../../assets/buildings.jpg';
    route3: string = '../../assets/tecnologies.jpg';
    width: number = 200;
    height: number = 100;
    hide_Motor: boolean = true;
    hide_Real_State: boolean = true;
    hide_Tech: boolean = true;
    text_Button: string = 'SAVE';
    title2: string = 'Add product';
    userKey: string;
    price: number;
    description: string;
    nameProduct: string;
    kilometers: number;
    yearProduct: number;
    type: string;

    location: string;
    bathRooms: string;
    sqareMeters: number;

    state: string;

    vehicles: IMotor[] = [];

    houses: IRealState[] = [];

    techn: ITech[] = [];

    id: number;
    name: string = 'Jesús';
    key: string = this.getKey(this.name);


    constructor(private _toastCtrl: ToastController, private motor: VehiclesService, private realState: RealStateService, private technology: TechService, private _user: UsersService, private _activatedRoute: ActivatedRoute) {

    }

    ngOnInit() {
        let ref = this.motor.getVehicles();
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                const value: IMotor = child.val();
                this.vehicles.push(value);
            });
        });

        let ref2 = this.technology.getTech();
        ref2.once('value', snapshot => {
            snapshot.forEach(child => {
                const value: ITech = child.val();
                this.techn.push(value);
            });
        });

        let ref3 = this.realState.getRealState();
        ref3.once('value', snapshot => {
            snapshot.forEach(child => {
                const value: IRealState = child.val();
                this.houses.push(value);
            });
        });


    }

    change_Hide_Motor(): void {
        this.hide_Motor = !this.hide_Motor;
        this.hide_Real_State = true;
        this.hide_Tech = true;
    }

    change_Hide_Real_State(): void {
        this.hide_Real_State = !this.hide_Real_State;
        this.hide_Motor = true;
        this.hide_Tech = true;
    }

    change_Hide_Tech(): void {
        this.hide_Tech = !this.hide_Tech;
        this.hide_Motor = true;
        this.hide_Real_State = true;
    }

    insertVehicles() {
        let vehicle: IMotor = {
            'id': this.vehicles.length + 1,
            'name': this.nameProduct,
            'description': this.description,
            'km': this.kilometers,
            'year': this.yearProduct,
            'price': this.price,
            'type': this.type,
            'userKey': this.key,
            'key': null,
        };
        this.motor.setVehicles(vehicle);
        this.presentToast();
    }

    insertRelState() {
        let house: IRealState = {
            'id': this.houses.length + 1,
            'location': this.location,
            'sqareMeters': this.sqareMeters,
            'price': this.price,
            'bathAndRooms': this.bathRooms,
            'description': this.description,
            'name': this.nameProduct,
            'userKey': this.key,
            'key': null,
        };

        this.realState.setHouses(house);
        this.presentToast();
    }

    insertTech() {
        let tech: ITech = {
            'id': this.techn.length + 1,
            'name': this.nameProduct,
            'description': this.description,
            'price': this.price,
            'state': this.state,
            'userKey': this.key,
            'key': null,
        };

        this.technology.setTech(tech);
        this.presentToast();
    }

    async presentToast() {
        const toast = await this._toastCtrl.create({
            message: 'Your product has been insert correctly!',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

    getKey(name: string): string {
        let ref = this._user.getUsers();
        ref.once('value', snapshot => {
            snapshot.forEach(child => {
                if (child.val().name === name) {
                    this.key = child.key;
                }
            });
            return this.key;
        });
        return null;
    }

}
