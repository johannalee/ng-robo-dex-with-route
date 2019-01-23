import { Action } from '@ngrx/store';

export enum SearchActionTypes {
  UpdateSearchTerm = '[Search] Update Search Term',
}

export class UpdateSearchTerm implements Action {
  public readonly type = SearchActionTypes.UpdateSearchTerm;
  constructor(public payload: string) {}
}

export type SearchActions = UpdateSearchTerm;
