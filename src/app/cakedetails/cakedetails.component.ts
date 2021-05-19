import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonserviceService } from '../commonservice.service';
// import { log } from 'node:console';
// import { from } from 'rxjs';
// import {UserListService} from "../user-list.service";

@Component({
  selector: 'app-cakedetails',
  templateUrl: './cakedetails.component.html',
  styleUrls: ['./cakedetails.component.css']
})
export class CakedetailsComponent implements OnInit {
 
  ids: any;
  cakeobj: any = {};
  message: any
  cake: any;
  file: any;
  imgurl: any;
  constructor(private routes: ActivatedRoute,private http: HttpClient,private route:Router,private toast: ToastrService, public cs : CommonserviceService) 
  {
    this.ids = +this.routes.snapshot.params['id'];
    console.log(this.ids);
   var apiurl = 'https://apifromashu.herokuapp.com/api/cake/';
  this.http.get(apiurl+this.ids).subscribe(
    (response: any) => {
      console.log('response from signup api', response);
      this.cakeobj = response.data;
      // this.cake = { name: this.cakeobj.name, cakeid: this.cakeobj.cakeid, image: this.cakeobj.image, price: this.cakeobj.price, weight: this.cakeobj.weight }
    },
    (error) => {
      console.log('Error from signup api', error);
    }
  ); 
   }
  
  ngOnInit(): void {
  }
  add() {
    var header =  new HttpHeaders();
    var api = 'https://apifromashu.herokuapp.com/api/addcaketocart';
    // var token  = JSON.parse(localStorage.token)
    // header = header.set('authtoken', token);
    this.http.post(api, this.cakeobj).subscribe((response) => {
      console.log("add cake to cart response",response)
      // if(response.message === "Added to cart")
      this.toast.info("added to cart!")
    }, (error) => {
      
      console.log("add cake to cart error",error)
    })


    if (!localStorage.getItem("email")) {
      this.toast.warning("Please Login First", "Warning");
      setTimeout(() => {
        this.route.navigate(['/login']);  
      },3000)
    }

  }

}
