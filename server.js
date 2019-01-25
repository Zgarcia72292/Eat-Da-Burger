//require npm packages and imports from other files// 

var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var routes = require("../Eat-Da-Burger/controllers/burgers_controller.js");
var app = express();

//middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


app.listen(PORT, function() {
 console.log("Server listening on: http://localhost:" + PORT);
});

