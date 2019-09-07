'use strict';

var Item = require('../model/apiModel.js');

exports.list_all_items = function(req, res) {
  Task.getAllItems(function(err, item) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', item);
    res.send(item);
  });
};



exports.create_an_item = function(req, res) {
  var new_item = new Item(req.body);

  //handles null error 
   if(!new_item.name || !new_item.qty || !new_item.amount){

            res.status(400).send({ error:true, message: 'Please provide a name, qty and amount.' });

        }
else{
  
  Item.createItem(new_item, function(err, item) {
    
    if (err)
      res.send("Error at apiController.js - exports.create_an_item: " + err);
    res.json(item);
  });
}
};

