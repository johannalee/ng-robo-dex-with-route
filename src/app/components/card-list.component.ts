import { Component, OnDestroy } from '@angular/core';
import { Robot } from '../store/robot/robot.type';
import { RobotService } from '../services/robot.service';

@Component({
  selector: 'app-card-list',
  template: `
    <span *ngFor="let robot of robots">
      <app-card [robot]="robot"></app-card>
    </span>
  `,
})

export class CardListComponent implements OnDestroy {
  public robots: Robot[];
  private subscription: any;

  constructor(
    private robotService: RobotService,
  ) {
    this.subscription = robotService.filterRobots().subscribe(state => {
      this.robots = state;
    });
  }

  public ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
