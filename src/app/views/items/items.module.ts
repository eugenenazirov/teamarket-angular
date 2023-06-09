import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ItemsRoutingModule} from './items-routing.module';
import {SharedModule} from "../../shared/shared.module";
import {GoodsComponent} from "./blocks/goods/goods.component";
import {OneItemComponent} from "./blocks/one-item/one-item.component";
import {CatalogComponent} from "./pages/catalog/catalog.component";
import {ItemDetailsComponent} from "./pages/item-details/item-details.component";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    CatalogComponent,
    ItemDetailsComponent,
    GoodsComponent,
    OneItemComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    ItemsRoutingModule
  ],
  exports: [
    ItemsRoutingModule,
  ]
})
export class ItemsModule {
}
