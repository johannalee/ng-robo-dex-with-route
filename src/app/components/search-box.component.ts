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
        (keyup)="searchRobo($event)"
      />
    </div>
  `,
})
export class SearchBoxComponent {

  constructor(private searchStore: SearchStoreService) { }

  searchRobo(event: any) {
    this.searchStore.updateSearchTerm(event.target.value);
  }
}
