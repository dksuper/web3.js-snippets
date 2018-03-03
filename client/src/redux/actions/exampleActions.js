import * as types from './actionTypes';
import Api from '../../utils/mockItemApi';
import {ajaxCallError} from "./ajaxStatusActions";

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
    // on reject --> dispatch ajaxCallError
    return Api.saveItem(dispatch, item)
      .then(item => {
        console.log(item);
        dispatch(addItemSuccess(item));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      })
  }
};

export const loadItems = () => {
  return function (dispatch) {
    // on start --> dispatch beginApiCall in api call
    // on resolve --> auto stop loading
    // on reject --> dispatch ajaxCallError
    return Api.getAllItems(dispatch)
      .then(items => {
        dispatch(loadItemsSuccess(items));
      }).catch(error => {
        dispatch(ajaxCallError(error));
        throw(error);
      })
  }
};