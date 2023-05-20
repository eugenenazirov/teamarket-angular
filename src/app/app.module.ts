import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from 'src/app/components/common/header/header.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {FormsModule} from "@angular/forms";
import {MainComponent} from './components/pages/main/main.component';
import {CatalogComponent} from './components/pages/catalog/catalog.component';
import {OrderComponent} from './components/pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CatalogComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
