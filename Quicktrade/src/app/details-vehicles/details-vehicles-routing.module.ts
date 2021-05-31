import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsVehiclesPage } from './details-vehicles.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsVehiclesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsVehiclesPageRoutingModule {}
