import { Component, OnDestroy } from '@angular/core';
import { dummyData, Robot } from '../store/robot.type';
import { SearchStore } from '../store/search/search.store';

@Component({
  selector: 'app-card-list',
  template: `
    <span *ngFor="let robot of filterRobots()">
      <app-card [robot]="robot" ></app-card>
    </span>
  `,
})

export class CardListComponent implements OnDestroy {
  public robots: Robot[] = dummyData;

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
