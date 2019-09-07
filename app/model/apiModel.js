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

module.exports = Item;