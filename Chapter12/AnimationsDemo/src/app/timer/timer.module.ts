import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TimerWidgetComponent } from "./timer.widget.component";

@NgModule({
  imports: [BrowserModule],
  exports: [TimerWidgetComponent],
  declarations: [TimerWidgetComponent],
  providers: [],
})
export class TimerModule { }
