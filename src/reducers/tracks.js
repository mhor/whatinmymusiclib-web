import {
  REQUEST_TRACKS_PENDING,
  REQUEST_TRACKS_SUCCESS,
  REQUEST_TRACKS_FAIL,
} from '../actions/tracks';

const INITIAL_STATE = {
  tracksList: {
    result: [],
    entities: {},
    error: null,
    loading: false,
  },
};

export default (state = INITIAL_STATE, action) => {
  let errorValue;
  switch (action.type) {
    case REQUEST_TRACKS_PENDING:
      return {
        ...state,
        tracksList: {
          result: [],
          entities: {},
          error: null,
          loading: true,
        },
      };
    case REQUEST_TRACKS_SUCCESS:
      return {
        ...state,
        tracksList: {
          result: action.payload.result,
          entities: action.payload.entities.tracks,
          error: null,
          loading: false,
        },
      };
    case REQUEST_TRACKS_FAIL:
      errorValue = action.payload || { message: action.payload.message };
      return {
        ...state,
        tracksList: {
          result: [],
          entities: {},
          error: errorValue,
          loading: false,
        },
      };
    default:
      return state;
  }
};
