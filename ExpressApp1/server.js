// Dependencies
var express = require("express");
var mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

var path = require('path');
var bodyParser = require("body-parser");
var path = require('path');
var exphbs = require("express-handlebars");

var articledb = require("./models/db");

// Initialize Express
var app = express();

app.use(express.static("public"));

//set view engine to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//var routes = require('./routes/index');
// Routes
require("./routes/htmlRoutes.js")(app);
require("./routes/apiRoutes.js")(app);

// Database configuration
//var databaseUrl = "articles";
//var collections = ["articles"];

////Set up default mongoose connection
//var mongoDB = '//127.0.0.1/articles';
//var mongoDB = 'articledb';
//mongoose.connect(mongoDB);
// Get Mongoose to use the global promise library
//mongoose.Promise = global.Promise;
//Get the default connection
//var db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
//db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//// Main route (simple Hello World Message)
//app.get("/", function(req, res) {
//  res.send("Hello world");
//});

//// Retrieve data from the db
//app.get("/all", function(req, res) {
//  // Find all results from the scrapedData collection in the db
//  db.scrapedData.find({}, function(error, found) {
//    // Throw any errors to the console
//    if (error) {
//      console.log(error);
//    }
//    // If there are no errors, send the data to the browser as json
//    else {
//      res.json(found);
//    }
//  });
//});



// Listen on port 3000
app.listen(3000, function() {
  console.log("App running on port 3000!");
});
