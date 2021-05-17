import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  sliderImg: any = this.cs.sliderImgs;
  constructor(private cs: UserListService) {}

  ngOnInit(): void {}
}
