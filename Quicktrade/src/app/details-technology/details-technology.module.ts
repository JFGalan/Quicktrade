import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsTechnologyPageRoutingModule } from './details-technology-routing.module';

import { DetailsTechnologyPage } from './details-technology.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsTechnologyPageRoutingModule
  ],
  declarations: [DetailsTechnologyPage]
})
export class DetailsTechnologyPageModule {}
