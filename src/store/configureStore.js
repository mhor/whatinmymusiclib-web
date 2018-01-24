import promise from 'redux-promise';

import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import { normalize } from 'normalizr';

import TrackSchema from '../schemas/track';
import rootReducer from '../reducers/reducers';

const middlewareConfig = {
  interceptors: {
    response: [
      ({ getState, dispatch, getSourceAction }, response) => {
        const action = getSourceAction(response.config);
        return (action.normalize && response.data)
          ? normalize(response.data, TrackSchema)
          : response
        ;
      },
    ],
  },
};

const client = axios.create({
  baseURL: 'http://localhost:3000/api',
  responseType: 'json',
});

// Middleware you want to use in production:
const enhancer = applyMiddleware(axiosMiddleware(client, middlewareConfig), promise);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(rootReducer, initialState, enhancer);
}
