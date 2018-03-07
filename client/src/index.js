import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CoinContract from './utils/contracts/Coin';

import {Provider} from 'react-redux';
import { DrizzleProvider } from 'drizzle-react'

import configureStore from './redux/store/configureStore'
import registerServiceWorker from './registerServiceWorker';

import {loadItems} from "./redux/actions/exampleActions";

// Initialize data from server or localstorage here
const store = configureStore();
store.dispatch(loadItems());

// Set Drizzle options.
const options = {
  web3: {
    block: false,
    fallback: {
      type: 'ws',
      url: 'wss://ropsten.infura.io/ws'
    }
  },
  contracts: [
    CoinContract
  ],
  events: {
    Coin: ['Transfer']
  }
};

ReactDOM.render(
  <DrizzleProvider options={options}>
    <Provider store={store}>
      <App/>
    </Provider>
  </DrizzleProvider>
  , document.getElementById('root'));
registerServiceWorker();

