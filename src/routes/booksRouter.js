const express = require("express");
const booksRouter = express.Router();
const bookdata = require("../model/bookModel");
const cors=require("cors");
var bodyParser = require('body-parser');
 booksRouter.use(bodyParser.json());
 booksRouter.use(bodyParser.urlencoded({ extended: true }));
 booksRouter.use(cors());

booksRouter.use(express.json());  






// var book=[ 
//     {
//         book: "The Dragon Warrior"                           ,
//         image:"images/chil_1.jpg"                         ,
//         src:"https://www.goodreads.com/book/show/40150608-the-dragon-warrior"                          ,
//         det: "As a member of the Jade Society, twelve-year-old Faryn Liu dreams of honoring her family and the gods by becoming a warrior. But the Society has shunned Faryn and her brother Alex ever since their father disappeared years ago, forcing them to train in secret.."                      ,
//         id:001
//     },


//     {
//         book: "Heart of the Moors: An Original Maleficent: Mistress of Evil Novel"                           ,
//         image:"images/chil_3.jpg"                         ,
//         src:"https://www.goodreads.com/book/show/45454619-heart-of-the-moors"                          ,
//         det: "original novel set between Disney's Maleficent and Maleficent: Mistress of Evil, in which newly-queened Aurora struggles to be"                      ,
//         id:002
//     },


//     {
//         book: "I Can Make This Promise"                           ,
//         image:"images/chil_5.jpg"                         ,
//         src:"https://www.goodreads.com/book/show/39087436-i-can-make-this-promise"                          ,
//         det: "All her life, Edie has known that her mom was adopted by a white couple. So, no matter how curious she might be about her Native American heritage, Edie is sure her family.."                      ,
//         id:003
//     },


//     {
//         book: "A Game of Thrones (A Song of Ice and Fire #1)"                           ,
//         image:"images/drama_2.jpg"                                        ,
//         src:"https://novels77.com/a-game-of-thrones/chapter-one-67613.html"                          ,
//         det: "As Warden of the north, Lord Eddard Stark counts it a curse when King Robert bestows on him the office of the Hand. His honour weighs him down at court where a true man does what he will, not what he must ... and a dead enemy is a thing of beauty..",
//         id:004
//                               ,
//     },




//     {
//         book: "The Woman in the Window"                           ,
//         image:"images/drama_4.jpg"                         ,
//         src:"https://www.goodreads.com/book/show/40389527-the-woman-in-the-window"                          ,
//         det: "nna Fox lives alone—a recluse in her New York City home, unable to venture outside.She spends her day drinking wine (maybe too much), watching old movies, recalling happier times . . . and spying on her neighbors..",
//         id:005
//                               ,
//     },




//     {
//         book: "This Tender Land"                           ,
//         image:"images/fic_3.jpg"                         ,
//         src:"https://www.goodreads.com/book/show/25813942-this-tender-land"                          ,
//         det: "1932, Minnesota—the Lincoln School is a pitiless place where hundreds of Native American children, forcibly separated from their parents, are sent to be educated. It is also hom.."                      ,
//         id:006
//     }












// ];


booksRouter.get("/",function(req,res){
    

                        bookdata.find()
                        .then(function(book){
                            res.render("books",{book});

                    })                      
        

});



booksRouter.get("/addBook",function(req,res){
    res.render("addBook");

                    });






booksRouter.get("/add",(req,res)=>{
    

    var item = {
        book:req.param("book"),
        image:req.param("image"),
        src:req.param("src"),
        det:req.param("des")
    }
    console.log(item);
    
    const book = new bookdata(item);
    book.save();
    res.redirect("/books")
    
    });





// booksRouter.delete("/:id",function(req,res){
//     const index=book.findIndex((i)=>{
       
//         console.log(i._id)
//         return req.params.id==i._id;
        
//     })

//     book.splice(index,001);
//     console.log(book);
//     res.send("success");
// }
// );
//.........................


booksRouter.get("/:id",function(req,res){
    // const id1 = req.params.id;
    // for(var i=0;i<books.length;i++)
    // {if(books[i].id==id1) break;} //when this comes its books[i]

     const ID=req.params.id;

    // const book = books.find((val)=>{return req.params.id==val.id});
       
    //    res.render("book",{nav,title:"Books",book});




       bookdata.findOne({_id:ID})
       .then(function(books){
           res.render("book",{books});
   
       })


});
// .......DELETE............

booksRouter.post("/delete",function(req,res){
    const id = req.body.id;
    console.log("req::::::::::::::::" + req.body[0]);
    console.log(req.body.id);
    bookdata.findByIdAndDelete({_id:id})
    .then(function(){
        
        res.redirect("/books");
    })
});
// ........UPDATE.........
booksRouter.post("/edit",function(req,res){
    var id = req.body.id;
    console.log("new:::::::::::::::::::::::::" + id);
    bookdata.findById(id,(err,book)=>{
        if(err){
            throw err;
        }
        else{
            
            res.render("editbook",{book});
        }
    })
})

booksRouter.post("/update",function(req,res){
    var id = req.body.id;
    console.log("id:" + id)
    var up = {$set:req.body}
    bookdata.findByIdAndUpdate(id,up,(err,data)=>{
        console.log("gggggggggggggggggggggggggggggggggggggg" );
        if(err){
            res.json({"status":"Failed"});
        }
       else{
        
            res.redirect("/books");
       }
      
        
    })
})


//....................................


// booksRouter.route("/").post((req,res)=>{
//                                 const newbook={
//                                     "id":book.length+100,
//                                     "book":req.body.book,
//                                     "author":req.body.author,
//                                     "image":req.body.image,
//                                     "src":req.body.src,
//                                     "det":req.body.det
//                                 }
//                         book.push(newbook);
//                         res.send("success");
//                     })


// booksRouter.get("/editbook/:id",(req,res)=>{


//                         const books = book.find((e)=>{
                    
//                                      return req.params.id==e.id;
                    
                    
//                         })
                    
//                     res.render("editbook",{
//                         books
                            
//                     });
                    
                    
//                     })


//  booksRouter.put('/update/:id',(req,res)=>{

//                         const index=book.findIndex(function(val){
//                                                             return val.id==req.params.id;
//                                                     })
//                                     book[index].book=req.body.book;
//                                     book[index].author=req.body.author;
//                                     book[index].image=req.body.image;
//                                     book[index].src=req.body.src;
//                                     book[index].det=req.body.det;
                    
//                                     res.send("succsess");
                    
//                     })
                    

module.exports=booksRouter;