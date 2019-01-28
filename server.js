//require npm packages and imports from other files// 

var express = require("express");
var exphbs = require("express-handlebars");
var PORT = process.env.PORT || 8080;
var routes = require("../Eat-Da-Burger/controllers/burgers_controller.js");
var app = express();
var methodOverride = require("method-override");
//middleware
//Found a node package that lets us use a PUT method inside the html to avoid
//the need for an ajax call with jquery//
//https://dev.to/moz5691/method-override-for-put-and-delete-in-html-3fp2//
app.use(methodOverride('_method'));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


app.use('/', routes);
app.listen(PORT, function() {
 console.log("Server listening on: http://localhost:" + PORT);
});

