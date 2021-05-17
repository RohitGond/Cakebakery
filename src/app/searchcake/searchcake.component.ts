import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonserviceService} from '../commonservice.service'


@Component({
  selector: 'app-searchcake',
  templateUrl: './searchcake.component.html',
  styleUrls: ['./searchcake.component.css']
})
export class SearchcakeComponent implements OnInit {
  teststring:any 
  min: any
  max:any
  searchcakes: any
  constructor(private route : ActivatedRoute, public cs : CommonserviceService,private http: HttpClient) {
    var url = 'https://apifromashu.herokuapp.com/api/searchcakes?q=';
    this.route.queryParams.subscribe((e: any) => {
      if (e.q) {
        console.log(url + e.q);
            this.http.get(url+e.q).subscribe(
              (response: any) => {
                console.log('response from signup api', response);
                this.searchcakes = response.data;
                if (!this.searchcakes.length) {
                  alert("there is no such cake");
                }
                console.log(this.searchcakes);
               },
              (error) => {
                console.log('Error from signup api', error);
              }
            );
              // this.cakes.cakecard.filter((ev: any) =>
              // ev.name.toLowerCase().includes(e.q.toLowerCase()));

          } else {
          
      }
    });
  }
  
  filter(){
  if(this.min || this.max){
    this.searchcakes = this.cs.cakes.filter((eve:any)=>
      (this.min? eve.price>=this.min:true) && (this.max? eve.price<=this.max:true)
      
      )
  }
  }
  ngOnInit(): void {
  }

}
