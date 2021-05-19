import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.css']
})
export class CheckoutSummaryComponent implements OnInit {

  constructor(public cs : CommonserviceService ,private route : Router) {
    this.cs.cartItems();
    
   }
continue(){
  this.cs.disablebtn = false;
  this.route.navigate(["/checkout/address"])
}
  ngOnInit(): void {
  }

}
