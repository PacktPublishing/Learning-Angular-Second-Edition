import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routes } from './routes';
import { HomeModule } from "./home/home.module";
import { TaskModule } from "./tasks/task.module";
import { TimerModule } from "./timer/timer.module";
import { PageNotFoundComponent } from "./page.not.found.component";
import { ProductsModule } from "./products/products.module";
import { JedisModule } from "./jedis/jedis.module";
import { PopupComponent } from "./popup.component";
import { AuthGuard } from "./common/auth.guard";
import { AuthService } from "./common/auth.service";
import { LazyModule } from "./lazy/lazy.module";

@NgModule({
  declarations: [
    AppComponent, PageNotFoundComponent, PopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { enableTracing: true }),
    HttpClientModule,
    TaskModule,
    TimerModule,
    ProductsModule,
    JedisModule,
    LazyModule
    /*
    HomeModule,
    TimerModule,
    ProductsModule,
    JedisModule,
    LazyModule*/
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
