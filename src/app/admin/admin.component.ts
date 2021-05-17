import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  cakeSearch: any = []
  
  constructor(public cs : CommonserviceService, private route : Router) { 
    this.cs.getdata();
  }
  cakedetail(id: any) {
    console.log(id);
    this.route.navigate(['/editcake', id]);
  
  }
  ngOnInit(): void {
  }

}
