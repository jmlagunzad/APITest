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
                    console.log(res.insertId);
                    result(null, res.insertId);
                }
            });           
};

module.exports = Item;