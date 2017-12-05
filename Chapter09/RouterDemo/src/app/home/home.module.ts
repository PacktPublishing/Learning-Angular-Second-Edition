import { NgModule } from '@angular/core';
import { HomeComponent } from "./home.component";
import { RouterModule } from "@angular/router";

import { routes } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [HomeComponent],
  providers: [],
})
export class HomeModule { }
