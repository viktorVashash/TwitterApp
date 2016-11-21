import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import logger from 'redux-logger';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import reducers from '../reducers';

const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

const middleware = routerMiddleware(hashHistory);
const storeWithMiddleware = applyMiddleware(thunk, promise, logger(), middleware)(createStore);
const store = storeWithMiddleware(reducers, enhancers);
const history = syncHistoryWithStore(hashHistory, store);

export default {
  store,
  history
};
