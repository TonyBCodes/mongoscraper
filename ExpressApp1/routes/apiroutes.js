// Dependencies
var express = require("express");
var mongoose = require("mongoose");
// Require request and cheerio. This makes the scraping possible
var request = require("request");
var cheerio = require("cheerio");

articledb = require("../models/db")


module.exports = function (app) {

    //// Scrape data from one site and place it into the mongodb db
    app.get("/scrape", function (req, res) {
        // Make a request for the news section of `ycombinator`
        request("https://www.npr.org/sections/news/", function (error, response, html) {
            // Load the html body from request into cheerio
            //console.log(error);
            //console.log(response);
            //console.log(html);
            var $ = cheerio.load(html);
            // For each element with a "title" class
            $(".item").each(function (i, element) {
                // Save the text and href of each link enclosed in the current element
                var headline = $(element).find("h2").text();
                var summary = $(element).find(".teaser").text();
                var url = $(element).find(".teaser").find("a").attr("href");

                //console.log(headline + " " + summary + " " + url);

                //If element has a headline, insert into table
                if (headline) {
                    // Insert the data in the scrapedData db
                    articledb.create({
                        headline: headline,
                        summary: summary,
                        url: url
                    },
                        function (err, inserted) {
                            if (err) {
                                // Log the error if one is encountered during the query
                                console.log(err);
                            }
                            else {
                                // Otherwise, log the inserted data
                                //console.log(inserted);
                            }
                        });
                }
            });
        });

        // Send a "Scrape Complete" message to the browser
        console.log("Scrape Complete");
    });

    app.get("/show_cards", function (req,res) {
        articledb.find({})
            .then(function (cards) {
                //console.log("**API Route Cards** "+cards);
                res.json(cards);
            });
    });
}