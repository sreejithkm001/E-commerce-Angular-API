import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ax-shared/ax-layout/header/header.component';
import { FooterComponent } from './ax-shared/ax-layout/footer/footer.component';
import { HomeComponent } from './ax-widgets/ax-organism/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductcardComponent } from './ax-widgets/ax-molecule/productcard/productcard.component';
import { ProductDetailsComponent } from './ax-widgets/ax-organism/product-details/product-details.component';
import { SignupComponent } from './ax-widgets/ax-organism/signup/signup.component';
import { CartPageComponent } from './ax-widgets/ax-organism/cart-page/cart-page.component';
import { CheckoutComponent } from './ax-widgets/ax-organism/checkout/checkout.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductcardComponent,
    ProductDetailsComponent,
    SignupComponent,
    CartPageComponent,
    CheckoutComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
