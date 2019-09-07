'user strict';
var sql = require('./dbConn.js');

//Item object constructor
var Item = function(item){
    this.name = item.name;
    this.qty = item.qty;
    this.amount = item.amount;
};
Item.createItem = function (newItem, result) {    
        sql.query("INSERT INTO items set ?", newItem, function (err, res) {
                
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    console.log("Successfully entered data: " + res.Item);
                    result(null, "Successfully entered data: " + res.Item);
                }
            });           
};

Item.getAllItems = function (result) {
    sql.query("Select * from items", function (err, res) {

            if(err) {
                console.log("error: ", err);
                result(null, err);
            }
            else{
              console.log('items : ', res);  
             result(null, res);
            }
        });  
    };
    
Item.getItemById = function (itemId, result) {
        sql.query("Select * from items where id = ? ", itemId, function (err, res) {             
                if(err) {
                    console.log("error: ", err);
                    result(err, null);
                }
                else{
                    result(null, res);
              
                }
            });   
};

Item.updateById = function(id, newItem, result){
    sql.query("UPDATE items SET name = ?, qty = ?, amount = ? WHERE id = ?", [newItem.name, newItem.qty, newItem.amount, id], function (err, res) {
            if(err) {
                console.log("error: ", err);
                  result(null, err);
               }
             else{   
               result(null, res);
                  }
              }); 
  };

Item.remove = function(id, result){
       sql.query("DELETE FROM items WHERE id = ?", [id], function (err, res) {
  
                  if(err) {
                      console.log("error: ", err);
                      result(null, err);
                  }
                  else{
                 
                   result(null, res);
                  }
              }); 
  };




module.exports = Item;