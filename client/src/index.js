import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker';

import { loadItems } from "./redux/actions/exampleActions";

// Initialize data from server or localstorage here
const store = configureStore();
store.dispatch(loadItems());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
registerServiceWorker();

