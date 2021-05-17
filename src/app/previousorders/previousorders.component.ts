import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-previousorders',
  templateUrl: './previousorders.component.html',
  styleUrls: ['./previousorders.component.css']
})
export class PreviousordersComponent implements OnInit {
  orders:any = [];
  constructor(private http: HttpClient) {
    const api = 'https://apifromashu.herokuapp.com/api/cakeorders';
    
    this.http.post(api , {}).subscribe((response : any) => {
      this.orders = [...response.cakeorders].reverse();
      console.log('previous orders', this.orders);
      this.orders.forEach((e : any ) => {
        const date = new Date(e.orderdate);
        e.orderdate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        console.log(date);
      });
      
    },
    (error) => {
      console.log('this is response ' , error);;
    
      
    })
   }
 showDetails(cakeid : any){
  document.getElementById(`naam${cakeid}`).classList.toggle("hidden");

 }
  ngOnInit(): void {
  }

}
