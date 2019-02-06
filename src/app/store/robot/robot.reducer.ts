import * as robotActions from './robot.actions';
import { Robot } from './robot.type';

export interface RobotState {
  robots: Robot[];
}

export const initialRobotState: RobotState = {
  robots: [],
};

export function robotReducer(
  state: RobotState = initialRobotState,
  action: robotActions.RobotActions,
): RobotState {
  switch (action.type) {
    case robotActions.RobotActionTypes.FetchRobotsSuccess:
      return { robots: action.payload };

    case robotActions.RobotActionTypes.DeleteRobot:
      return { robots: state.robots.filter(robot => robot.id !== action.payload) };

    default:
      return state;
  }
}
