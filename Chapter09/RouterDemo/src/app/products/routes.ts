import { ProductsContainerComponent } from "./products.container.component";
import { ProductListComponent } from "./product.list.component";
import { ProductDetailComponent } from "./product.detail.component";
import { ProductsDetailOrders } from "./products.detailorders.component";
import { AuthGuard } from "../common/auth.guard";

export const routes = [{
  path: 'products',
  canActivate: [AuthGuard],
  component: ProductsContainerComponent,
  children: [{
    path: '',
    component: ProductListComponent
  }, {
    path: ':id',
    component: ProductDetailComponent
  }, {
    path: ':id/orders',
    component: ProductsDetailOrders
  }]
}];

