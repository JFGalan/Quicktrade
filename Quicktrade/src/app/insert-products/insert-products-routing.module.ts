import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InsertProductsPage } from './insert-products.page';

const routes: Routes = [
  {
    path: '',
    component: InsertProductsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InsertProductsPageRoutingModule {}
