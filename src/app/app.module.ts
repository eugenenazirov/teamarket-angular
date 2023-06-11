import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CoreModule} from "./core/core.module";
import {SharedModule} from "./shared/shared.module";
import {BaseComponent} from './views/base/base.component';
import {registerLocaleData} from "@angular/common";
import localeKz from '@angular/common/locales/kk';

registerLocaleData(localeKz, 'kz');

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'kz'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
