import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {CommonserviceService} from '../commonservice.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  
  cakeSearch: any = []

  constructor(private router: ActivatedRoute, public cs: CommonserviceService,private http: HttpClient,private route: Router) {
  this.cs.getdata();
  
  }

  cakedetail(id: any) {
    console.log(id);
    this.route.navigate(['/cake', id]);
  
  }
  ngOnInit(): void {
    
  }
  ngDoCheck(){
    this.cakeSearch = this.cs.cakeSearch
  }
}
