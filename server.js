//Dependencies
var express = require("express");
var mongojs = require('mongojs');
// Require request cheerio
var request = require("request");
var cheerio = require("cheerio");
// Initialize express
var app = express();
// Database Config
var databaseUrl = "headlines";
var collections = ["scrapedData"];
// Hook mongojs config to the "db" variable
var db = mongojs(databaseUrl, collections);
db.on("error", function (error) {
    console.log("Database Error:", error)
});

app.use(express.static("public"));

app.get("/", function(req, res) {
    res.send("Hello world");
  });

// Retrieve data from the databse
app.get("/all", function (req, res) {
    // Finding all results from 'scrapedData' collection in the db
    db.scrapedData.find({}, function (error, found) {
        if (error) {
            console.log(error)
        }
        else {
            res.json(found);
        }
    });
});

// Scrape data from "comicbookmovie.com" and place it into the database
app.get("/scrape", function (req, res) {
    request("https://www.comicbookmovie.com/news/", function (error, response, html) {
        var $ = cheerio.load(html);
        $(".headline").each(function (i, element) {
            var headline = $(element).children("a").text();
            var link = $(element).children("a").attr("href");
           //var picture = $(element).children("a").attr("img");

            if (title, link ) {
                db.scrapedData.insert({
                    title: title,
                    link: link,
                    //picture: picture
                },
                    function (err, inserted) {
                        if (condition) {
                            console.log(err)
                        } else {
                            console.log(inserted);
                        }
                    });
            }
        });
    });

    // Send a "Scrape Complete" message to the browser.
    res.send("Scrape Complete");
});




// Listen on port 3000
app.listen(27017, function () {
    console.log("App running on port 27017!")
});