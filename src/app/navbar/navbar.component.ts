import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { CommonConnectionOptions } from 'node:tls';
import { CommonserviceService } from '../commonservice.service';
// import{SearchComponent} from '../Search/search.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  searchcake:any = undefined;
  question10:any
  flag: any = true;
  email: any;
  imgurl:any;
  // file: any;
  // imgurl: any;
  constructor( private route :Router, private http : HttpClient) {}
  
  ngOnInit(): void {}
  search(){
    this.searchcake = this.searchcake.trim();
    if (!this.searchcake) return;
    if(this.searchcake){
      this.route.navigate(['/search'], {queryParams:{q:this.searchcake}});
    }
  }
   ngDoCheck(){
    this.email = localStorage.getItem("email");
    if (this.email) {
      this.flag = false;
    }
  }
  logout() {
    localStorage.removeItem("email")
    this.route.navigate(['/login'])
    this.flag = true;
  }
  upload(event: any) {
    const data: any = event.target.querySelector('input');
    // console.log(data);
    if (data.files.length == 0) {
      console.log("No file selected!");
      return
   }
  let file: File = data.files[0];
  var formData = new FormData();
  formData.append('file', file);
    console.log(file);
  
  // this.files.inProgress = true;
  var api = 'https://apifromashu.herokuapp.com/api/upload';
  this.http.post(api,formData).subscribe((res: any) => {
    console.log("response from upload api", res)
    this.imgurl=res.imageUrl;
  }, (error) => {
    console.log("error from upload api",error)
      }
    );


  }
}
