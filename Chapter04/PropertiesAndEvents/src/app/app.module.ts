import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountdownTimerComponent } from "./countdown.timer.component";
import { TimerComponent } from "./timer.component";

@NgModule({
  declarations: [
    AppComponent, CountdownTimerComponent, TimerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
