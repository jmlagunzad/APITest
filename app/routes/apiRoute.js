'use strict';
module.exports = function(app) {
  var controller = require('../controller/apiController.js');

  // Routes
  app.route('/items')
    //.get(controller.list_all_items)
    .post(controller.create_an_item);
   
   //app.route('/items/:itemId')
    //.get(controller.read_a_task)
    //.put(controller.update_a_task)
    //.delete(controller.delete_a_task);
    };