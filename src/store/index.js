import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux'
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

let configureStore = () => {
  let middlewares = [routerMiddleware(browserHistory)];
  let store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
  );

  return store
};

export default configureStore;
