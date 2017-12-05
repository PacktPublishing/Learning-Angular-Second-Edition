import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

import { routes } from './routes';
import { ProductDetailComponent } from "./product.detail.component";
import { ProductListComponent } from "./product.list.component";
import { ProductsContainerComponent } from "./products.container.component";
import { ProductsDetailOrders } from "./products.detailorders.component";

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductsContainerComponent,
    ProductsDetailOrders
  ],
  providers: [],
})
export class ProductsModule {

}
