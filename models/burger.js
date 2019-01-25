var orm = require("../config/orm.js");

var burger = {
    //here we create a function to get data from our burgers
    //table by passing the parameters through the orm// 
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    }
}

module.exports = burger; 