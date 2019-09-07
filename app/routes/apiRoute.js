'use strict';
module.exports = function(app) {
  var controller = require('../controller/apiController.js');

  // Routes
  app.route('/items')
    .get(controller.list_all_items)
    .post(controller.create_an_item);
   
   app.route('/items/:itemId')
    .get(controller.read_an_item)
    .put(controller.update_an_item)
    .delete(controller.delete_an_item);
    };