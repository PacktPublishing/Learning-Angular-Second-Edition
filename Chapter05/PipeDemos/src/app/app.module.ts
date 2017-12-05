import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PipeDemoComponent } from "./pipe.demo.component";
import { DecimalPipe } from '@angular/common';

import { registerLocaleData } from '@angular/common';
import localeSV from '@angular/common/locales/sv';
import { CurrencyDemoComponent } from "./currency.demo.component";
import { JsonDemoComponent } from "./json.demo.component";
import { i18DemoComponent } from "./i18.demo.component";

registerLocaleData(localeSV);

@NgModule({
  declarations: [
    AppComponent, PipeDemoComponent, CurrencyDemoComponent, JsonDemoComponent, i18DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
