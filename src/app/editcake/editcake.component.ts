import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-editcake',
  templateUrl: './editcake.component.html',
  styleUrls: ['./editcake.component.css']
})
export class EditcakeComponent implements OnInit {
 ids: any
 cakeobj : any = {}
  constructor(public cs : CommonserviceService, private http : HttpClient, private routes : ActivatedRoute) { 
    // this.cs.getdata();
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

}
