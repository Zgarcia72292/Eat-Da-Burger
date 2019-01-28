var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

//the first route is for pulling and displaying data
//from the database onto the html handlebar files
//we also set the index page as our root level with ("/")//
router.get("/", function(req,res){
    burger.all(function(data){
        var hbsObject = {
            burgers1: data
          };
        console.log(hbsObject);
        res.render("index", hbsObject );
    });
   
});

//here we handle a post request, where the id in the string will be the same
//as the corresponding burger selected. The parameters for "id" will be passed back. After the request 
//is made and is successful the page will be refreshed// 
router.put("/burgers/:id", function(req,res){
    var id = req.params.id;
    burger.update(id, function () {
        res.redirect("/");
    });
});

 


module.exports = router;