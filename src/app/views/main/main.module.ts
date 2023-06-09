import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MainComponent} from "./pages/main/main.component";
import {SliderComponent} from "./blocks/slider/slider.component";
import {FaqComponent} from "./blocks/faq/faq.component";
import {SeeOurCollectionsModalComponent} from "./blocks/see-our-collections-modal/see-our-collections-modal.component";
import {MainRoutingModule} from "./main-routing.module";
import {NgbAccordionModule, NgbCarouselModule} from "@ng-bootstrap/ng-bootstrap";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [
    MainComponent,
    SliderComponent,
    FaqComponent,
    SeeOurCollectionsModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbCarouselModule,
    NgbAccordionModule,
    MainRoutingModule,
  ],
  exports: [
    MainRoutingModule,
  ]
})
export class MainModule {
}
