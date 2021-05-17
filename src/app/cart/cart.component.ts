import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';
// import { log } from 'node:console';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItem : any
  priceArray: any
  total:any;
  constructor(private http : HttpClient, public cs : CommonserviceService) {
    this.cs.cartItems();
   }

  ngOnInit(): void {
  }

  

  removeCake(i:any){
    console.log(this.cartItem);
    let apiUrl = 'https://apifromashu.herokuapp.com/api/removecakefromcart';
    this.http.post(apiUrl, {cakeid: i}).subscribe((response : any) => {
      console.log('cart items', response);
      this.cs.cartItems();
      
    },
    (error) => {
      console.log('this is response ' , error);;
    
      
    })
  }
}
