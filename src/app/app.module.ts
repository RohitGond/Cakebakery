import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './sign-up/sign-up.component';
import { CardComponent } from './card/card.component';
import { from } from 'rxjs';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdditemComponent } from './additem/additem.component';
// import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { TestDirective } from './test.directive';
import { CarouselComponent } from './carousel/carousel.component';
import { HighlightDirective } from './highlight.directive';
import { SearchComponent } from './search/search.component';
import { SearchCakeDirective } from './search-cake.directive';
import { HomeComponent } from './home/home.component';
import { SearchcakeComponent } from './searchcake/searchcake.component';
import { CakedetailsComponent } from './cakedetails/cakedetails.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { CakeformComponent } from './cakeform/cakeform.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { AuthinterceptorService } from './authinterceptor.service';
import { CartComponent } from './cart/cart.component';
import { EditcakeComponent } from './editcake/editcake.component';
import { AdminComponent } from './admin/admin.component';
import { PreviousordersComponent } from './previousorders/previousorders.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { OrderconfermComponent } from './orderconferm/orderconferm.component';
import { RoutegaurdService } from './routegaurd.service';
import { AddcakeComponent } from './addcake/addcake.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    CardComponent,
    ForgotPasswordComponent,
    AdditemComponent,
    UserListComponent,
    TestDirective,
    CarouselComponent,
    HighlightDirective,
    SearchComponent,
    SearchCakeDirective,
    HomeComponent,
    ForgotPasswordComponent,
    SearchcakeComponent,
    CakedetailsComponent,
    CakeformComponent,
    PlaceorderComponent,
    CartComponent,
    EditcakeComponent,
    AdminComponent,
    PreviousordersComponent,
    CheckoutSummaryComponent,
    CheckoutAddressComponent,
    CheckoutPaymentComponent,
    OrderconfermComponent,
    AddcakeComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), ],
  providers: [
    {provide : HTTP_INTERCEPTORS,useClass: AuthinterceptorService, multi : true}, RoutegaurdService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
