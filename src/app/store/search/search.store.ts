import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppStore } from '../app.store';
import { AppState } from '../reducers';
import { SearchState } from './search.reducer';
import { UpdateSearchTerm } from './search.actions';

@Injectable()
export class SearchStore {
  constructor(private store: Store<AppState>, private appStore: AppStore) {}

  public getSearchState(): Observable<SearchState> {
    return this.appStore.getAppState().pipe(map(state => state.search));
  }

  public getSearchTerm(): Observable<string> {
    return this.getSearchState().pipe(map(state => state.searchTerm));
  }

  public updateSearchTerm(payload: string) {
    this.store.dispatch(new UpdateSearchTerm(payload));
  }
}
