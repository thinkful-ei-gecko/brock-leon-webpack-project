import $ from 'jquery';
import shoppingList from './shopping-list.js';
import store from './store.js';
import api from './api.js';

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();

  // On initial load, fetch Shopping Items and render
  api.getItems()
    .then((items) => {
      items.forEach((item) => store.addItem(item));
      shoppingList.render();
    })
    .catch(err => console.log(err.message));
});

