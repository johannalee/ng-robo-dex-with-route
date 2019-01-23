import { Component } from '@angular/core';
import { SearchStore } from '../store/search/search.store';

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

  constructor(private searchStore: SearchStore) { }

  searchRobo(event: any) {
    this.searchStore.updateSearchTerm(event.target.value);
  }
}
