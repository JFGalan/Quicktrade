import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsVehiclesPageRoutingModule } from './details-vehicles-routing.module';

import { DetailsVehiclesPage } from './details-vehicles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsVehiclesPageRoutingModule
  ],
  declarations: [DetailsVehiclesPage]
})
export class DetailsVehiclesPageModule {}
