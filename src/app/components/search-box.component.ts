import { Component } from '@angular/core';
import { SearchStoreService } from '../store/search/search.store.service';

@Component({
  selector: 'app-search-box',
  template: `
    <div className="pa2">
      <input
        class="pa2"
        type="search"
        placeholder="Search Me"
        (keyup)="searchRobot($event)"
      />
    </div>
  `,
})
export class SearchBoxComponent {

  constructor(private searchStoreService: SearchStoreService) { }

  searchRobot(event: any) {
    this.searchStoreService.updateSearchTerm(event.target.value);
  }
}
