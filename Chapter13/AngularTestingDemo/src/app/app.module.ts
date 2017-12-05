import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { JediListComponent } from "./jedi.list.component";
import { JediDetailComponent } from "./jedi.detail.component";
import { ExampleComponent } from "./example.component";
import { DependencyService } from "./dependency.service";
import { AsyncDependencyService } from "./async.dependency.service";
import { JediService } from "./jedi.service";
import { RouterModule } from "@angular/router";
import { ExampleRoutingParamsComponent } from "./example.routing.params.component";

@NgModule({
  declarations: [
    AppComponent, JediDetailComponent, JediListComponent, ExampleComponent, ExampleRoutingParamsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule
  ],
  providers: [DependencyService, AsyncDependencyService, JediService],
  bootstrap: [AppComponent]
})
export class AppModule { }
