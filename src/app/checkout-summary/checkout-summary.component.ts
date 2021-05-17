import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-checkout-summary',
  templateUrl: './checkout-summary.component.html',
  styleUrls: ['./checkout-summary.component.css']
})
export class CheckoutSummaryComponent implements OnInit {

  constructor(public cs : CommonserviceService) {
    this.cs.cartItems();
    
   }

  ngOnInit(): void {
  }

}
