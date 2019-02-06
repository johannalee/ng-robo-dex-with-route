import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Robot } from './robot.type';
import { FetchRobotSuccess, DeleteRobot } from './robot.actions';
import { createFeatureSelector, createSelector, select, Store} from '@ngrx/store';
import { RobotState } from './robot.reducer';
import { AppState } from '../reducers';

const selectRobot = createFeatureSelector<RobotState>('robot');
const selectRobots = createSelector(selectRobot, (state: RobotState) => state.robots);

@Injectable({
  providedIn: 'root'
})
export class RobotStoreService {

  constructor(
    private store: Store<AppState>,
  ) {}

  // action dispatchers
  public fetchRobotSuccess(payload: Robot[]) {
    this.store.dispatch(new FetchRobotSuccess(payload));
  }

  public deleteRobot(payload: number) {
    this.store.dispatch(new DeleteRobot(payload));
  }

  // selectors
  public getRobots(): Observable<Robot[]> {
    return this.store.pipe(select(selectRobots));
  }
}
