import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {NotFoundComponent} from "./views/base/pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./views/main/main.module').then(m => m.MainModule),
      },
      {
        path: 'catalog',
        loadChildren: () => import('./views/items/items.module').then(m => m.ItemsModule),
      },
      {
        path: 'order',
        loadChildren: () => import('./views/order/order.module').then(m => m.OrderModule),
      }
    ]
  },
  // {
  //   path: '**',
  //   component: NotFoundComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
