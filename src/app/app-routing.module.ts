import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './ax-widgets/ax-organism/home/home.component';
import { ProductDetailsComponent } from './ax-widgets/ax-organism/product-details/product-details.component';
import { SignupComponent } from './ax-widgets/ax-organism/signup/signup.component';
import { CartPageComponent } from './ax-widgets/ax-organism/cart-page/cart-page.component';
import { CheckoutComponent } from './ax-widgets/ax-organism/checkout/checkout.component';

const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:ProductDetailsComponent,
    path:'details/:productId'
  },
  {
    component:SignupComponent,
    path:'user-signup'
  },
  {
    component: CartPageComponent,
    path: 'cart-page',
  },
  {
    component: CheckoutComponent,
    path: 'checkout',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
