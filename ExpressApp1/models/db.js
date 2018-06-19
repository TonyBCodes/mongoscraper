// JavaScript source code
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articles');

const Schema = mongoose.Schema;
    //ObjectId = Schema.ObjectId;

const Articles = new Schema({
    headline: {
        type: String,
        index: true,
        required: true
    },
    summary: {
        type: String
    },
    url: {
        type: String
    },
    comment: [{
        type: String
    }] 
});

const articlesdb = mongoose.model("articles", Articles);

//articlesdb.create({
//    headline: "test",
//    summary: "",
//    url: "",
//    comment:["testcomment1","testcomment2"]
//}, function (err, res) {
//    console.log(err);
//    console.log(res);
//    //console.log("table created");
//});
module.exports = articlesdb;