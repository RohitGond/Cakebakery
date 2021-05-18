import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../routegaurd.service';

@Component({
  selector: 'app-checkout-payment',
  templateUrl: './checkout-payment.component.html',
  styleUrls: ['./checkout-payment.component.css']
})
export class CheckoutPaymentComponent implements  CanComponentDeactivate {

  constructor() { }
  canDeactivate() {
    console.log('i am navigating away');

    // if the editName !== this.user.name
  
      return window.confirm('Discard changes?');
  

}
  ngOnInit(): void {
  }

}
