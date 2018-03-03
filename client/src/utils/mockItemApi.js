import delay from './delay';
import * as loadActions from '../redux/actions/ajaxStatusActions';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const items = [
  {
    id: "1",
    text: "title1"
  },
  {
    id: "2",
    text: "title2"
  },
  {
    id: "3",
    text: "title3"
  },
  {
    id: "4",
    text: "title4"
  }
];

//This would be performed on the server in a real app. Just stubbing in.
const generateId = () => {
  return Math.random();
};

class Api {
  static getAllItems(dispatch) {
    dispatch(loadActions.beginAjaxCall());

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], items));
      }, delay);
    });
  }

  static saveItem(dispatch, item) {
    dispatch(loadActions.beginAjaxCall());

    item = Object.assign({}, item); // to avoid manipulating object passed in.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation

        if (item.id) {
          const existingItemIndex = items.findIndex(a => a.id === item.id);
          items.splice(existingItemIndex, 1, item);
        } else {
          //Just simulating creation here.
          //The server would generate ids and watchHref's for new courses in a real app.
          //Cloning so copy returned is passed by value rather than by reference.
          item.id = generateId();
          items.push(item);
        }

        resolve(item);
      }, delay);
    });
  }

  static deleteItems(itemId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const indexOfItemToDelete = items.findIndex(item => {
          return item.id === itemId;
        });
        items.splice(indexOfItemToDelete, 1);
        resolve();
      }, delay);
    });
  }
}

export default Api;