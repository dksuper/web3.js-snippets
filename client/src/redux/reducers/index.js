import { combineReducers } from 'redux'

import items from './exampleReducer';
import amountCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
  items,
  amountCallsInProgress
});

export default rootReducer;