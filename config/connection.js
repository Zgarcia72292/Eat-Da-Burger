var mysql = require("mysql");

var connection = mysql.createConnection({

    host: "localhost",
    port: 3306,
    user: "Zach",
    password: "420Smokeit!",
    database: "burgers_db"

}); 

connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });
  
  // Export connection for our ORM to use.
  module.exports = connection;