import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsertProductsPageRoutingModule } from './insert-products-routing.module';

import { InsertProductsPage } from './insert-products.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsertProductsPageRoutingModule
  ],
  declarations: [InsertProductsPage]
})
export class InsertProductsPageModule {}
