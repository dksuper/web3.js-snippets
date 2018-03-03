import * as types from '../actions/actionTypes';
import initialState from './initialState';

function actionTypeEndsInSuccess(type){
  return type.substr(type.length - 8) === '_SUCCESS';
}

export default function apiStatusReducer(state = initialState.amountCallsInProgress, action){
  if(action.type === types.BEGIN_API_CALL){
    return state + 1;
  } else if(action.type === types.API_CALL_ERROR || actionTypeEndsInSuccess(action.type)){
    return state - 1;
  }

  return state;
}

