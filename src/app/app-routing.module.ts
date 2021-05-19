import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { SearchcakeComponent } from './searchcake/searchcake.component';
import { SignupComponent } from './sign-up/sign-up.component';
import {CakedetailsComponent} from "./cakedetails/cakedetails.component"
import { CartComponent } from './cart/cart.component';
import { EditcakeComponent } from './editcake/editcake.component';
import { AdminComponent } from './admin/admin.component';
import { PlaceorderComponent } from './placeorder/placeorder.component';
import { PreviousordersComponent } from './previousorders/previousorders.component';
import { CheckoutSummaryComponent } from './checkout-summary/checkout-summary.component';
import { CheckoutAddressComponent } from './checkout-address/checkout-address.component';
import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { OrderconfermComponent } from './orderconferm/orderconferm.component';
import { RoutegaurdService } from './routegaurd.service';
import { AdditemComponent } from './additem/additem.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'forgetPassword', component: ForgotPasswordComponent },
  {path: 'search', component: SearchcakeComponent},
  { path: 'cake/:id', component: CakedetailsComponent },
  {path : 'cart', component : CartComponent},
 
  {path: 'admin', loadChildren :() => import( "./admin/admin.module").then((m) => m.AdminModule)   },
  {path: 'checkout', component : PlaceorderComponent, 
   children: [
   {path: '' , component : CheckoutSummaryComponent},
   {path: 'address' , component : CheckoutAddressComponent},
   {path: 'payment' , component : CheckoutPaymentComponent , canDeactivate: [RoutegaurdService]},
   {path: 'orderconfirm' , component : OrderconfermComponent},
    ]},
  {path: 'previousorders', component : PreviousordersComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
