import { Directive, Input } from '@angular/core';
// import { CommonConnectionOptions } from 'node:tls';
import { CommonserviceService } from "./commonservice.service"

@Directive({
  selector: '[appSearchCake]',
})
export class SearchCakeDirective {
  @Input() searchKey: any;
  constructor(private cs: CommonserviceService) {
    
  }
 
  ngOnChanges(changes: any) {
    if (this.searchKey) {
      this.cs.cakeSearch = this.cs.cakes.filter((e: any) =>
        e.name.toLowerCase().includes(this.searchKey.toLowerCase())
      );
    } else {
      this.cs.cakeSearch = this.cs.cakes;
    }
  }
}
