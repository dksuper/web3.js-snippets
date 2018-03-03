import * as types from './actionTypes';
import Api from '../../utils/mockItemApi';
import {apiCallError} from "./apiStatusActions";

export const addItemSuccess = (item) => {
  return {type: types.ADD_ITEM_SUCCESS, item};
};

export const loadItemsSuccess = (items) => {
  return {type: types.LOAD_ITEMS_SUCCESS, items};
};

export const addItem = (item) => {
  return function (dispatch) {
    // on start --> dispatch beginApiCall in api call
    // on resolve --> auto stop loading
    // on reject --> dispatch apiCallError
    return Api.saveItem(dispatch, item)
      .then(item => {
        dispatch(addItemSuccess(item));
      }).catch(error => {
        dispatch(apiCallError(error));
        throw(error);
      })
  }
};

export const loadItems = () => {
  return function (dispatch) {
    // on start --> dispatch beginApiCall in api call
    // on resolve --> auto stop loading
    // on reject --> dispatch apiCallError
    return Api.getAllItems(dispatch)
      .then(items => {
        dispatch(loadItemsSuccess(items));
      }).catch(error => {
        dispatch(apiCallError(error));
        throw(error);
      })
  }
};