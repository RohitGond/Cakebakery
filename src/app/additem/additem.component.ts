import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { log } from 'node:console';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  cake: any = {type : "" };
  
  constructor( private routes : ActivatedRoute, private route : Router, private http : HttpClient , private toast : ToastrService) { 
    
  }

  ngOnInit(): void {
  }
  addItem() {
    const api = 'https://apifromashu.herokuapp.com/api/addcake';
    this.http.post(api, this.cake).subscribe((res: any)=>{
      console.log(res.message);
      
    },
     (error)=> {console.log(error);})
  }
  upload(e: any){
    console.log(e.target);
    const inputimg =  e.target.files[0], previewimg = e.target.parentElement.querySelector("img"),
    formData : any = new FormData();
    formData.append("file", inputimg);
    this.http.post('https://apifromashu.herokuapp.com/api/upload', formData).subscribe((res : any) => {
      if(res.imageUrl){
        this.toast.success("image uploaded");
        this.cake.image = res.imageUrl;
      }
      else{
        this.toast.warning("image upload failed");
      }

    }, (error) => {
      console.log(error);
      
    })
    console.log(inputimg);
    

  }
}
