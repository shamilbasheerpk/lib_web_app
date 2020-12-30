const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/NL");
const Schema=mongoose.Schema;


const NewSchema = new Schema({
    book:String,
    image:String,
    src:String,
    det:String
    

})


const bookdata = mongoose.model("bookdata",NewSchema);         //bookdata(inside):collection name

module.exports = bookdata;