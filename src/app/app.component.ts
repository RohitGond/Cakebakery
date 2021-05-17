import { Component, Input } from '@angular/core';
// import { trainees, cakeList } from './data';
import { CommonserviceService } from './commonservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'walkingTreeProject';
  // trainees = trainees;
  cakeList = this.cs.cakes;

  constructor(public cs: CommonserviceService) {}
}
