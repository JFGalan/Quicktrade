
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TechService} from '../services/TechService';
import {ITech} from '../interfaces';

@Component({
    selector: 'app-details-technology',
    templateUrl: './details-technology.page.html',
    styleUrls: ['./details-technology.page.scss'],
})
export class DetailsTechnologyPage implements OnInit {
    id: number;
    prodTech: ITech[] = [];
    key: string;

    constructor(private _activatedRoute: ActivatedRoute, private thechnology: TechService) {
    }

    ngOnInit() {
        this.key = this._activatedRoute.snapshot.paramMap.get('key');
        this.prodTech = this.thechnology.getTechById(this.key);
    }


}
