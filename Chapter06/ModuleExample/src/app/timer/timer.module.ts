import { NgModule } from "@angular/core";
import { TimerWidgetComponent } from "./timer.widget.component";
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [TimerWidgetComponent],
  exports: [TimerWidgetComponent],
  imports: [BrowserModule]
})
export class TimerModule { }
