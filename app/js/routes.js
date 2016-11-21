import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import InitialScreen from './containers/InitialScreen';
import MainScreen from './containers/MainScreen';
import SuccessScreen from './components/SuccessScreen';

export default (
  <Route path='/' component={App}>
    <IndexRoute component={InitialScreen} />
    <Route path='/MainScreen' component={MainScreen} />
    <Route path='/SuccessScreen' component={SuccessScreen} />
  </Route>
);
