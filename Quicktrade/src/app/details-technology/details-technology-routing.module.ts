import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsTechnologyPage } from './details-technology.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsTechnologyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsTechnologyPageRoutingModule {}
