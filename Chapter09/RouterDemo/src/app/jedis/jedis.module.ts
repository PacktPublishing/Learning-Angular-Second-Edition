import { NgModule } from '@angular/core';
import { routes } from './routes';
import { RouterModule } from "@angular/router";
import { JediComponent } from "./jedi.component";
import { JediHeaderComponent } from "./jedi.header.component";
import { JedisShellComponent } from "./jedis.shell.component";

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    JediComponent,
    JediHeaderComponent,
    JedisShellComponent
  ],
  providers: [],
})
export class JedisModule { }
