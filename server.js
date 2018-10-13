// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var cheerio = require("cheerio");
var request = require("request");
var logger = require("morgan");

// Port
var PORT = process.env.PORT || 8080;

var app = express();

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

// Handlebars
var expresshbs = require("express-handlebars");

app.engine("handlebars", expresshbs({ defaultLayout: "main"}));

app.set("view engine", "handlebars");

// DB

var User = require("./userModel.js");

// Request Log
app.use(logger("dev"));

// Connect
mongoose.connect("mongodb://localhost/userdb", { useNewUrlParser: true });

// Start the server
app.listen(PORT, function() {
    console.log("App running on port " + PORT + "!");
  });
