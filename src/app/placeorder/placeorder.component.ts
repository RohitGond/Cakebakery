import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-placeorder',
  templateUrl: './placeorder.component.html',
  styleUrls: ['./placeorder.component.css']
})

export class PlaceorderComponent implements OnInit {
  orderdetails: any = {};
  constructor( private http : HttpClient,
    private routes : ActivatedRoute,
    private toast : ToastrService, private route : Router) {
      let api = 'https://apifromashu.herokuapp.com/api/cakecart';
      this.http.post(api,{}).subscribe((res:any)=> 
      {
        this.orderdetails.cakes = res.data;
        console.log(this.orderdetails);
        
        this.orderdetails.price = this.orderdetails.cakes.reduce((acc:any , e:any) => e.price *e.quantity + acc , 0)
      },
      (err) => {
        console.log(err);
      });
    }
 checkout(){
  const api = 'https://apifromashu.herokuapp.com/api/addcakeorder';
  this.http.post(api,this.orderdetails).subscribe((res:any)=> 
      {
       console.log(res);
      },
      (err) => {
        console.log(err);
      });

 }
 confirmorder(){
   this.route.navigate(['checkout/orderconfirm'])
 }
  ngOnInit(): void {
  }

}
