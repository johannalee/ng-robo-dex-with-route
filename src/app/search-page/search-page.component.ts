import { Component } from '@angular/core';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-search-page',
  template: `
    <div class="tc mb3">
      <h1>RoboDex</h1>
      <app-search-box></app-search-box>
    </div>
    <div class="ba vh-75 overflow-y-scroll">
      <app-card-list></app-card-list>
    </div>
  `,
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  constructor(private robotService: RobotService) {
    robotService.fetchRobots();
  }
}
