import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TimerModule } from "./timer/timer.module";
import { ExampleComponent } from "./expample.component";
import { ExampleBuilderComponent } from "./example.builder.component";
import { HighlightDirective } from "./highlight.directive";
import { HighlightExampleComponent } from "./highlight.component";

@NgModule({
  declarations: [
    AppComponent, ExampleComponent, ExampleBuilderComponent, HighlightDirective, HighlightExampleComponent
  ],
  imports: [
    BrowserModule,
    TimerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
