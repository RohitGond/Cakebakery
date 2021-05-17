import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  cakeList:any = this.cs.cakes;
  getcakeid(cake:any){
   console.log(cake.id);
    
  }
  constructor(public cs: CommonserviceService) {}

  ngOnInit(): void {}
}
