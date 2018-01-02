import { FETCH_TRACKS, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_FAILURE } from '../actions/tracks';

const INITIAL_STATE = {
  tracksList: {
    tracks: [],
    error: null,
    loading: false,
  },
};

export default (state = INITIAL_STATE, action) => {
  let errorValue;
  switch (action.type) {
    case FETCH_TRACKS: // start fetching posts and set loading = true
      return { ...state, tracksList: { tracks: [], error: null, loading: true } };
    case FETCH_TRACKS_SUCCESS: // return list of posts and make loading = false
      return { ...state, tracksList: { tracks: action.payload, error: null, loading: false } };
    case FETCH_TRACKS_FAILURE: // return error and make loading = false
      // 2nd one is network or server down errors
      errorValue = action.payload || { message: action.payload.message };
      return { ...state, tracksList: { tracks: action.payload, error: errorValue, loading: false } };
    default:
      return state;
  }
};
