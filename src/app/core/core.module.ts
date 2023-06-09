import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeaItemService} from "./services/tea-item.service";
import {SearchItemsService} from "./services/search-items.service";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    TeaItemService,
    SearchItemsService,
  ]
})
export class CoreModule {
}
