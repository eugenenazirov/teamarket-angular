import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextOverflowPipe} from "./pipes/text-overflow.pipe";
import {HeaderComponent} from "../views/base/blocks/header/header.component";
import {FooterComponent} from "../views/base/blocks/footer/footer.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    TextOverflowPipe,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    TextOverflowPipe,
    HeaderComponent,
    FooterComponent,
  ]
})
export class SharedModule {
}
