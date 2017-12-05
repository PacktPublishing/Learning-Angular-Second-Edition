import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { routes } from './routes';
import { LazyComponent } from "./lazy.component";

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [LazyComponent],
  providers: [],
})
export class LazyModule { }
