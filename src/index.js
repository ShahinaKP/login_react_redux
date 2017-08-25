import React from 'react';
import { render } from 'react-dom';
import { createStore,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/login/login';
import reducer from './reducers/login';
import thunk from "redux-thunk";
import logger from 'redux-logger';

const store = createStore(reducer, applyMiddleware(thunk, logger));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);




