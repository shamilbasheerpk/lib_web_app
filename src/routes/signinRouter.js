const express = require("express");
const signinRouter = express.Router();


signinRouter.get("/",function(req,res){


                                                

    res.render("signin");



});

module.exports=signinRouter;


