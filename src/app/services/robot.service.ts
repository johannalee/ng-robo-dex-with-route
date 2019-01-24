import { Injectable } from '@angular/core';
import { dummyData, Robot} from '../store/robot.type';

@Injectable({
  providedIn: 'root'
})
export class RobotService {

  constructor() {}

  public filterRobots(keyword: string): Robot[] {
    return dummyData.filter(robot => robot.name.toLowerCase().includes(keyword));
  }
}
