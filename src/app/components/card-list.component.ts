import { Component } from '@angular/core';
import { Robot } from '../store/robot.type';

@Component({
  selector: 'app-card-list',
  template: `
    <div *ngFor="let robot of robots">
      <app-card [robot]="robot" ></app-card>
    </div>
  `,
})

export class CardListComponent {
  public robots: Robot[] = [
    {id: 1, name:'John', email: 'john@staplescanada.ca'},
    {id: 2, name:'Sherry', email: 'sherry@staplescanada.ca'},
    {id: 3, name:'Fred', email: 'fred@staplescanada.ca'},
  ];

  constructor() {}
}
