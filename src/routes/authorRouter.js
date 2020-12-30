const express = require("express");
const authorRouter = express.Router();


var authors=[


                    {
                        author:"Chetan Bhagat" ,
                        image:"author_1.jpg",
                        des:"Cited by The New York Times in 2008 as the biggest selling English language novelist in India’s history, Chetan Bhagat is author, screenwriter, columnist and TV personality. He is known for Comedy-drama novels about young urban middle-class Indians.Some of his famous work includes Five Point Someone, 2 States, Half Girlfriend and One Indian Girl." ,
                        src:"https://en.wikipedia.org/wiki/Chetan_Bhagat",
                        id:001
                    }            ,

                    {
                        author:"Jhumpa Lahiri" ,
                        image:"author_2.jpg",
                        des:"Laihiri is well known for her novels, essays and short stories. She was born in London but relocated to the United States to get her education from the Barnard College. She went ahead for her masters and attained her degree from the Boston University. She was a struggling writer and her work was initially rejected by the publishers until her biggest success, ‘The interpreter of Maladies’."   ,
                        src:"https://en.wikipedia.org/wiki/Jhumpa_Lahiri" ,
                        id:002
                    }            ,


                    {
                        author:"Laura Smith" ,
                        image:"author_3.jpg",
                        des:"Erik Larson (born January 3, 1954) is an American journalist and author of nonfiction books. He has written a number of bestsellers,[1] such as The Devil in the White City (2003), about the 1893 World's Columbian Exposition in Chicago and a series of murders by H. H. Holmes that were committed in the city around the time of the Fair."   ,
                        src:"https://en.wikipedia.org/wiki/Erik_Larson_(author)" ,
                        id:003
                    }             ,


                    {
                        author:"J.K. Rowling" ,
                        image:"author_4.jpg",
                        des:"Joanne Rowling CH, better known by her pen name J. K. Rowling, is a British author, film producer, television producer, screenwriter, and philanthropist. She is best known for writing the Harry Potter fantasy series, which has won multiple awards and sold more than 500 million copies, becoming the best-selling book series in history.."   ,
                        src:"https://en.wikipedia.org/wiki/J._K._Rowling"  ,
                        id:004
                    }             ,



                    {
                        author:"George R. R. Martin" ,
                        image:"author_5.jpg",
                        des:"George Raymond Richard Martin also known as GRRM, is an American novelist and short story writer in the fantasy, horror, and science fiction genres, screenwriter, and television producer. He is best known for his series of epic fantasy novels, A Song of Ice and Fire, which was adapted into the HBO series Game of Thrones (2011–2019).."    ,
                        src:"https://en.wikipedia.org/wiki/Erik_Larson_(author)"  ,
                        id:005
                    }            ,


                    {
                        author:"Fyodor Dostoevsky" ,
                        image:"author_6.jpg",
                        des:"Fyodor Mikhailovich Dostoevsky, sometimes transliterated Dostoyevsky, was a Russian novelist, short story writer, essayist, journalist and philosopher."  ,
                        src:"https://en.wikipedia.org/wiki/Fyodor_Dostoevsky" ,
                        id:006
                    }            


];






authorRouter.get("/",function(req,res){


                                                

                                                    res.render("author",{

                                                                        authors





                                                                        });
                                                                    });



authorRouter.get("/:id",(req,res)=>{

        

            const author=authors.find((i)=>{
           return req.params.id==i.id
                                })
                                                                                                                                    //find fuction used to get data element in array.....it returns the mathching
                                                                            
                                                                                                                                   
                                                                                                                                    
                                                                            
                res.render("authorOne",
                    {
                                 author
                                                                                  
                                                                                }
                                                                                ); 
                                                                            });
                                                                        
                                                                        
                                                                                                 


                                                                              
                                            
                                            




authorRouter.delete("/:id",function(req,res){
                                                    const index=authors.findIndex((i)=>{
                                                
                                                        return req.params.id==i.id;
                                                    })
                                                
                                                    authors.splice(index,001);
                                                    console.log(authors);
                                                    res.send("success");
                                                }
                                                );



module.exports=authorRouter;