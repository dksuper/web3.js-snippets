import { combineReducers } from 'redux'

import items from './exampleReducer';
import amountCallsInProgress from './apiStatusReducer';

const rootReducer = combineReducers({
  items,
  amountCallsInProgress
});

export default rootReducer;