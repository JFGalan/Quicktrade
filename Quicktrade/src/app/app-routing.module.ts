import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: 'home/:id',
        loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'list-products',
        loadChildren: () => import('./list-products/list-products.module').then(m => m.ListProductsPageModule)
    },
    {
        path: 'details-vehicles/:key',
        loadChildren: () => import('./details-vehicles/details-vehicles.module').then(m => m.DetailsVehiclesPageModule)
    },
    {
        path: 'details-real-state/:key',
        loadChildren: () => import('./details-real-state/details-real-state.module').then(m => m.DetailsRealStatePageModule)
    },
    {
        path: 'details-technology/:key',
        loadChildren: () => import('./details-technology/details-technology.module').then(m => m.DetailsTechnologyPageModule)
    },
  {
    path: 'insert-products/:id',
    loadChildren: () => import('./insert-products/insert-products.module').then( m => m.InsertProductsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'my-products/:id',
    loadChildren: () => import('./my-products/my-products.module').then( m => m.MyProductsPageModule)
  }

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
