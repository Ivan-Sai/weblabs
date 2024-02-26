import { Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {CartComponent} from "./pages/cart/cart.component";
import {ProductComponent} from "./pages/product/product.component";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: MainComponent,
  },
  {
    path: "cart",
    pathMatch: "full",
    component: CartComponent,
  },
  {
    path: "product/:id",
    pathMatch: "full",
    component: ProductComponent,
  }
];
