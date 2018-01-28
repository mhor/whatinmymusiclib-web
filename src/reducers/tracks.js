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
  tracksList: {
    result: [],
    entities: {},
  },
};

export default (state = INITIAL_STATE, action) => {
  let errorValue;
  switch (action.type) {
    case REQUEST_TRACKS_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case REQUEST_TRACKS_SUCCESS:
      return {
        ...state,
        isError: null,
        isLoading: false,
        nextPage: state.nextPage + 1,
        hasMore: (action.payload.result.length > 0),
        tracksList: {
          result: union(state.tracksList.result, action.payload.result),
          entities: merge(state.tracksList.entities, action.payload.entities.tracks),
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
