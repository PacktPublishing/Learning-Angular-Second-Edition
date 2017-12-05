import { PageNotFoundComponent } from "./page.not.found.component";
import { PopupComponent } from "./popup.component";

export const routes = [
  {
    path: "**", component: PageNotFoundComponent
  },
  {
    path: 'info',
    component: PopupComponent,
    outlet: 'popup'
  },
  {
    path: 'lazy',
    loadChildren: 'app/lazy/lazy.module#LazyModule',
  }
];
