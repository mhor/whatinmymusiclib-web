
import axios from 'axios';

export const FETCH_TRACKS = 'REQUEST_TRACKS';
export const FETCH_TRACKS_SUCCESS = 'REQUEST_TRACKS_SUCCESS';
export const FETCH_TRACKS_FAILURE = 'REQUEST_TRACKS_FAILURE';

export const fetchTracks = () => ({
  type: FETCH_TRACKS,
  payload: axios.get('http://localhost:3000/api/v1/tracks'),
});

export const fetchTracksSuccess = tracks => ({
  type: FETCH_TRACKS_SUCCESS,
  payload: tracks,
});

export const fetchTracksFailure = error => ({
  type: FETCH_TRACKS_FAILURE,
  payload: error,
});
