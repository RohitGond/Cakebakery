import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonserviceService {
  disablebtn: any = true;
  cartItem : any =[]
  priceArray: any =[]
  total:any;
  question11:any
  cakes:any = []
   question10="some value"
 cakeSearch:any = []
  constructor(private http: HttpClient,private router: Router) { }
  getdata(){
    const apiUrl = "https://apibyashu.herokuapp.com/api/allcakes";
    this.http.get(apiUrl).subscribe(
      (response: any)=>{console.log(response);
      this.cakeSearch = response.data;
      this.cakes = [...response.data];
      },
      (error)=> {console.log(error);
      });
  } 
  cartItems(){
    let apiUrl = 'https://apifromashu.herokuapp.com/api/cakecart';
    this.http.post(apiUrl , {}).subscribe((res: any) => {
      console.log('cart items' , res);
      this.cartItem = [...res.data];
      console.log("somthi ng", this.cartItem);
      this.total = this.cartItem.reduce((acc:any , e:any) => e.price *e.quantity + acc , 0)
    },
    (error) => {
      console.log('this is response' + error);
    
    }
    );
    this.priceArray = this.cartItem.map((ele)=> ele.price)
    console.log(this.priceArray);
    
  }

  }
