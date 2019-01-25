var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//the first route is for pulling and displaying data
//from the database onto the html handlebar files
//we also set the index page as our root level with ("/")//
router.get("/", function(req,res){
    burger.all(function(data){
        console.log(data);
    })
    res.render("index");
})

module.exports = router;