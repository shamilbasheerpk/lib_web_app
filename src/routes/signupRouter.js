const express = require("express");
const signupRouter = express.Router();


signupRouter.get("/",function(req,res){


                                                

    res.render("signup");



});

module.exports=signupRouter;


