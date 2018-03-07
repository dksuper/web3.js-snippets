import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function exampleReducer(state = initialState.items, action) {
  switch(action.type) {
    case types.ADD_ITEM_SUCCESS:
      return [...state, Object.assign({}, action.item) ];
    case types.LOAD_ITEMS_SUCCESS:
      console.log('LOADED', state);
      return action.items;
    default:
      console.log('LOADED', state);
      return state;
  }
}