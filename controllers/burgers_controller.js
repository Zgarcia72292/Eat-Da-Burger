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

//here we handle a post request, where "burgerId" will be the name
//of the field where a corresponding id will be selected. After
//the request is made and is successful the page will be refreshed// 
router.put("/burgers/update", function(req,res){
    burger.update(req.body.burgerId, function(result){
        console.log(result);
        res.redirect("/");
    })
});
 


module.exports = router;