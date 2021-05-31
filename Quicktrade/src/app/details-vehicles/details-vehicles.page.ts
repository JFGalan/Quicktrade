import { Component, OnInit } from '@angular/core';
import {IMotor} from '../interfaces';
import {ActivatedRoute} from '@angular/router';
import {VehiclesService} from '../services/VehiclesService';

@Component({
  selector: 'app-details-vehicles',
  templateUrl: './details-vehicles.page.html',
  styleUrls: ['./details-vehicles.page.scss'],
})
export class DetailsVehiclesPage implements OnInit {

  motor: IMotor[] = [];
  key: string;
  constructor(private _activatedRoute: ActivatedRoute, private _vechiclesService: VehiclesService) { }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get('key');
    this.motor = this._vechiclesService.getVehicleById(this.key);
  }



}
