import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsRealStatePage } from './details-real-state.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsRealStatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsRealStatePageRoutingModule {}
