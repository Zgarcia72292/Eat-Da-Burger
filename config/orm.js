// Import MySQL connection.
var connection = require("../config/connection.js");

//code from week 14 activity 17 Cats//

//the following functions help translate the data into something readable by mysql
// and create shorthand so we dont have to write out entire queries repeatedly// 
function printQuestionMarks(num) {
  var arr = [];
 for (var i = 0; i < num; i++) {
    arr.push("?");
  }
return arr.toString();
}

function objToSql(ob) {
 
var arr = [];
for (var key in ob) {
    var value = ob[key];
  if (Object.hasOwnProperty.call(ob, key)) {
       if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
       arr.push(key + "=" + value);
    }
  }
return arr.toString();
}


var orm = {
    //this first method is for selecting all of the burgers from the table
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  //this method is for adding a burger into the table
  insertOne: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  //this last method is for updating an exist burger// 
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },

};
module.exports = orm;