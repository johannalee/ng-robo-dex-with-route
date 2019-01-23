import * as searchActions from './search.actions';

export interface SearchState {
  searchTerm: string;
}

export const initialSearchState: SearchState = {
  searchTerm: '',
};

export function searchReducer(
  state: SearchState = initialSearchState,
  action: searchActions.SearchActions,
): SearchState {
  switch (action.type) {
    case searchActions.SearchActionTypes.UpdateSearchTerm:
      return { searchTerm: action.payload };
    default:
      return state;
  }
}
