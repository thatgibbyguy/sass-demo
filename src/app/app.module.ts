import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDemoComponent } from './card-demo/card-demo.component';
import { OxButtonComponent } from './ox-button/ox-button.component';

@NgModule({
  declarations: [
    AppComponent,
    CardDemoComponent,
    OxButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
