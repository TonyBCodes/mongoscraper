// JavaScript source code
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/articles');

const Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

const Articles = new Schema({
    headline: String,
    summary: String,
    url: String,
    comment: Array 
});

module.exports = Articles;