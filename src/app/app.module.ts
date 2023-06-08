import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from 'src/app/components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MainComponent} from './components/pages/main/main.component';
import {CatalogComponent} from './components/pages/catalog/catalog.component';
import {OrderComponent} from './components/pages/order/order.component';
import {SliderComponent} from './components/blocks/slider/slider.component';
import {FaqComponent} from './components/blocks/faq/faq.component';
import {GoodsComponent} from './components/blocks/goods/goods.component';
import {ItemDetailsComponent} from './components/pages/item-details/item-details.component';
import {OneItemComponent} from './components/blocks/one-item/one-item.component';
import {OrderFormComponent} from './components/blocks/order-form/order-form.component';
import {
  SeeOurCollectionsModalComponent
} from './components/blocks/see-our-collections-modal/see-our-collections-modal.component';
import {HttpClientModule} from "@angular/common/http";
import {TextOverflowPipe} from './pipes/text-overflow.pipe';
import {TeaItemService} from "./services/tea-item.service";
import {SearchItemsService} from "./services/search-items.service";
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogComponent,
    OrderComponent,
    SliderComponent,
    FaqComponent,
    GoodsComponent,
    ItemDetailsComponent,
    OneItemComponent,
    OrderFormComponent,
    SeeOurCollectionsModalComponent,
    TextOverflowPipe,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    TeaItemService,
    SearchItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
