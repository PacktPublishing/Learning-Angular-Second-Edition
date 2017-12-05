import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from "./new-http-client/DataService";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { MockInterceptor } from "./new-http-client/mock.interceptor";
import { TaskModule } from "./tasks/task.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TaskModule
  ],
  providers: [
    DataService,
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

/*
,
    { provide: HTTP_INTERCEPTORS, useClass: MockInterceptor, multi: true }
*/
