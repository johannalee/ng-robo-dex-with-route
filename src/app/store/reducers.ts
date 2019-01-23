import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeLogger } from 'ngrx-store-logger';
import { searchReducer, SearchState } from './search/search.reducer';

export interface AppState {
  search: SearchState;
}

export function logger(reducer: ActionReducer<AppState>): any {
  // default, no options
  return storeLogger()(reducer);
}

export const reducers: ActionReducerMap<AppState> = {
  search: searchReducer,
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [logger] : [];
