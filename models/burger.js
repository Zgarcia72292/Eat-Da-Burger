var orm = require("../config/orm.js");

var burger = {
    //here we create a functions to get, update, and post data from our burgers
    //table by passing the parameters through the orm// 
    all: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        })
    },

    update: function(id, cb){
        orm.updateOne(id, function(res){
            cb(res);
        } );
    },

    insert: function (cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function (res) {
            cb(res);
          }
          );
    }
}

module.exports = burger;  