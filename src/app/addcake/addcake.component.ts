import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addcake',
  templateUrl: './addcake.component.html',
  styleUrls: ['./addcake.component.css']
})
export class AddcakeComponent implements OnInit {
 cakedetails : any = {}
  constructor() { }

  ngOnInit(): void {
  }
  
}
