import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { hashHistory } from 'react-router';
import reducers from '../reducers';

const middleware = routerMiddleware(hashHistory);
const storeWithMiddleware = applyMiddleware(thunk, promise, middleware)(createStore);
const store = storeWithMiddleware(reducers);
const history = syncHistoryWithStore(hashHistory, store);

export default {
  store,
  history
};
