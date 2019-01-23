import { Component, OnDestroy } from '@angular/core';
import { Robot } from '../store/robot.type';
import { SearchStore } from '../store/search/search.store';

@Component({
  selector: 'app-card-list',
  template: `
    <div *ngFor="let robot of filterRobots()">
      <app-card [robot]="robot" ></app-card>
    </div>
  `,
})

export class CardListComponent implements OnDestroy {
  public robots: Robot[] = [
    {id: 1, name:'John', email: 'john@staplescanada.ca'},
    {id: 2, name:'Sherry', email: 'sherry@staplescanada.ca'},
    {id: 3, name:'Fred', email: 'fred@staplescanada.ca'},
  ];

  private subscription: any;
  private searchTerm = '';

  constructor(private searchStore: SearchStore) {
    this.subscription = searchStore.getSearchTerm().subscribe(state => {
      this.searchTerm = state.toLowerCase();
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public filterRobots(): Robot[] {
    return this.robots.filter(robot => robot.name.toLowerCase().includes(this.searchTerm));
  }
}
