import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsRealStatePageRoutingModule } from './details-real-state-routing.module';

import { DetailsRealStatePage } from './details-real-state.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsRealStatePageRoutingModule
  ],
  declarations: [DetailsRealStatePage]
})
export class DetailsRealStatePageModule {}
