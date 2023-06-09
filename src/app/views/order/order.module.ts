import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderFormComponent} from "./blocks/order-form/order-form.component";
import {OrderComponent} from "./pages/order/order.component";
import {OrderRoutingModule} from "./order-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    OrderComponent,
    OrderFormComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    OrderRoutingModule,
  ],
  exports: [
    OrderRoutingModule,
  ]
})
export class OrderModule {
}
