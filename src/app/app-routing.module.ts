import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./components/pages/main/main.component";
import {CatalogComponent} from "./components/pages/catalog/catalog.component";
import {OrderComponent} from "./components/pages/order/order.component";
import {ItemDetailsComponent} from "./components/pages/item-details/item-details.component";

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'catalog',
    component: CatalogComponent,
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
