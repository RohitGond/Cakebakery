import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-additem',
  templateUrl: './additem.component.html',
  styleUrls: ['./additem.component.css']
})
export class AdditemComponent implements OnInit {
  cake: any = {};
  constructor() { }

  ngOnInit(): void {
  }
  addItem() {
    console.log(this.cake);
  }
}
