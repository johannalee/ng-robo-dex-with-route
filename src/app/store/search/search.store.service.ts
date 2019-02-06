import { Injectable } from '@angular/core';
import { createFeatureSelector, createSelector, select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../reducers';
import { SearchState } from './search.reducer';
import { UpdateSearchTerm } from './search.actions';

const selectSearch = createFeatureSelector<AppState, SearchState>('search');
const selectSearchTerm = createSelector(selectSearch, (state: SearchState) => state.searchTerm);

@Injectable()
export class SearchStoreService {
  constructor(private store: Store<AppState>) {}

  public updateSearchTerm(payload: string) {
    this.store.dispatch(new UpdateSearchTerm(payload));
  }

  // selectors
  public getSearchTerm(): Observable<string> {
    return this.store.pipe(select(selectSearchTerm));
  }
}
