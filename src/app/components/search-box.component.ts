import { Component } from '@angular/core';

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

  constructor() { }

  searchRobo(event: any) {
    console.log(event.target.value);
  }
}
