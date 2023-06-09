import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ItemDetailsComponent} from "./pages/item-details/item-details.component";

const routes: Routes = [
  {
    path: '',
    component: CatalogComponent,
  },
  {
    path: 'item/:id',
    component: ItemDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule {
}
