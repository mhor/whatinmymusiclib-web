import merge from 'lodash.merge';
import union from 'lodash.union';

import {
  REQUEST_TRACKS_PENDING,
  REQUEST_TRACKS_SUCCESS,
  REQUEST_TRACKS_FAIL,
} from '../actions/tracks';


const INITIAL_STATE = {
  nextPage: 1,
  hasMore: true,
  isLoading: false,
  isError: null,
  searchTerm: null,
  tracksList: {
    result: [],
    entities: {},
  },
};

export default (state = INITIAL_STATE, action) => {
  let errorValue;
  let nextPage = state.nextPage;
  let result = state.tracksList.result;
  let entities = state.tracksList.entities;
  switch (action.type) {
    case REQUEST_TRACKS_PENDING:
      if (action.clearData === true) {
        result = [];
        entities = {};
        nextPage = 1;
      }

      return {
        ...state,
        isLoading: true,
        searchTerm: action.searchTerm,
        nextPage,
        tracksList: {
          result,
          entities,
        },
      };
    case REQUEST_TRACKS_SUCCESS:
      return {
        ...state,
        isError: null,
        isLoading: false,
        nextPage: nextPage + 1,
        hasMore: (action.payload.result.length > 0),
        tracksList: {
          result: union(result, action.payload.result),
          entities: merge(entities, action.payload.entities.tracks),
        },
      };
    case REQUEST_TRACKS_FAIL:
      errorValue = action.payload || { message: action.payload.message };
      return {
        ...state,
        isError: errorValue,
        isLoading: false,
      };
    default:
      return state;
  }
};
