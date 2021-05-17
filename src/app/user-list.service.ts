import { Injectable, Input } from '@angular/core';
import { sliderImgs, cakeList } from './data';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  users: any = [];
  sliderImgs: any = sliderImgs;
  cakeList: any = cakeList;
  cakeSearch: any = this.cakeList;

  constructor() {}

  searchCake() {
    console.log(this.cakeSearch);
  }
}
