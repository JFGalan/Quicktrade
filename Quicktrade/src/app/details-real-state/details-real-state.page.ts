
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RealStateService} from '../services/RealStateService';
import {IRealState} from '../interfaces';

@Component({
  selector: 'app-details-real-state',
  templateUrl: './details-real-state.page.html',
  styleUrls: ['./details-real-state.page.scss'],
})
export class DetailsRealStatePage implements OnInit {
  id: number;
  house: IRealState[] = [];
  key: string;
  constructor(private _activatedRoute: ActivatedRoute, private realState: RealStateService) { }

  ngOnInit() {
    this.key = this._activatedRoute.snapshot.paramMap.get('key');
    this.house = this.realState.getRealStateById(this.key);
  }

}
