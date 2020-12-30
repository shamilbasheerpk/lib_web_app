const express =require("express"); 
const app =new express;                                   
const path  =require("path"); 
const authorRouter=require("./src/routes/authorRouter");  
const booksRouter=require("./src/routes/booksRouter"); 
const signinRouter=require("./src/routes/signinRouter");
const signupRouter=require("./src/routes/signupRouter"); 
const user = require("./src/views/user") ;


app.set("view engine","ejs");
app.set("views","./src/views");


app.use(express.static(path.join(__dirname,"/public"))); 



var bodyParser = require('body-parser'); app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.json());         



app.use("/author",authorRouter);
app.use("/books",booksRouter);
app.use("/signin",signinRouter);
app.use("/signup",signupRouter)



app.get("/",function(req,res){


    res.render("index",{

navb:[{title:"author",link:"/author"},{title:"Books",link:"/Books"}]


                     })


});




// .................


app.get("/adduser",function(req,res){
    
    var newuser = {
        user:req.param("user"),
        pass:req.param("pass")
    };
    console.log(newuser);
    user.push(newuser);
    console.log(user);
    res.render("signin");
})

app.get("/check",function(req,res){
    var checkuser = {
        user:req.param("user"),
        pass:req.param("pass")
    };
    console.log(checkuser);
    var flagg=false;

//    var flagg = user.find((e)=>{
       for(let i=0;i<user.length;i++){
        
        if(checkuser.user==user[i].user && checkuser.pass==user[i].pass)
        {
            
            flagg=true;
            break;
        }
        else{
                flagg=false;
            }
        };
if(flagg===true){
    // alert("User Verified.Click to continue");
    res.render("index")
}
else{
    // alert("User Verification Failed");
    res.render("signin");
}

});









// ...........................

app.listen(5002);
