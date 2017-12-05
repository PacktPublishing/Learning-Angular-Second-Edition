import { NgModule } from '@angular/core';
import { TimerComponent } from "./timer.component";
import { RouterModule } from "@angular/router";

import { routes } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [TimerComponent],
  providers: [],
})
export class TimerModule { }
