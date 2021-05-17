import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from '../commonservice.service';

// import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  searchQuery: any;

  constructor(private cs: CommonserviceService) {}

  ngOnInit(): void {}
}
