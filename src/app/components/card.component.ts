import { Component, Input } from '@angular/core';
import { Robot } from '../store/robot/robot.type';

@Component({
  selector: 'app-card',
  template: `
    <div class="tc bg-light-green dib pa2 ma2 br3 grow">
      <img src="https://robohash.org/{{ robot.id }}?size=200x200" role="presentation"/>
      <div class="f3">{{ robot.name }}</div>
      <div>{{ robot.email }}</div>
    </div>
  `,
})

export class CardComponent {
  @Input()
  public robot: Robot;
  constructor() {}
}
