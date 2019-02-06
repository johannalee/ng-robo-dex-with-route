import { Action } from '@ngrx/store';
import { Robot } from './robot.type';

export enum RobotActionTypes {
  Success = 'Fetch Robot Success',
  Error = 'Fetch Robot Error',
}

export class FetchRobotSuccess implements Action {
  public readonly type = RobotActionTypes.Success;
  constructor(public payload: Robot[]) {}
}

export class FetchRobotError implements Action {
  public readonly type = RobotActionTypes.Error;
}

export type RobotActions = FetchRobotSuccess | FetchRobotError;
