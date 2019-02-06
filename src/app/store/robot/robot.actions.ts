import { Action } from '@ngrx/store';
import { Robot } from './robot.type';

export enum RobotActionTypes {
  FetchRobotsSuccess = 'Fetch Robot Success',
  FetchRobotsError = 'Fetch Robot Error',
  DeleteRobot = 'Delete Robot',
}

export class FetchRobotSuccess implements Action {
  public readonly type = RobotActionTypes.FetchRobotsSuccess;
  constructor(public payload: Robot[]) {}
}

export class FetchRobotError implements Action {
  public readonly type = RobotActionTypes.FetchRobotsError;
}

export class DeleteRobot implements Action {
  public readonly type = RobotActionTypes.DeleteRobot;
  constructor(public payload: number) {}
}

export type RobotActions = FetchRobotSuccess | FetchRobotError | DeleteRobot;
