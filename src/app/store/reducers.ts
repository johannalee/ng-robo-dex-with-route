import {
  ActionReducer,
  ActionReducerMap,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeLogger } from 'ngrx-store-logger';
import { searchReducer, SearchState } from './search/search.reducer';
import { robotReducer, RobotState } from './robot/robot.reducer';

export interface AppState {
  search: SearchState;
  robot: RobotState;
}

export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const reducers: ActionReducerMap<AppState> = {
  search: searchReducer,
  robot: robotReducer,
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
