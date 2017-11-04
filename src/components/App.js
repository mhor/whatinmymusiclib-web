import React from 'react';
import { Provider } from 'react-redux';

import { Route, Switch } from 'react-router-dom';
import { Layout } from './Layout';
import IndexPage from '../containers/IndexPageContainer';
import { NotFoundPage } from './NotFoundPage';

import configureStore from '../store/configureStore';

const renderIndex = () => <IndexPage />;
const store = configureStore();
export const App = () => (
  <Provider store={store}>
    <Layout>
      <Switch>
        <Route exact path="/" render={renderIndex} />
        <Route component={NotFoundPage} />
      </Switch>
    </Layout>
  </Provider>
);

export default App;
