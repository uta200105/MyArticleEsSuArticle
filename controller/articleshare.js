var express = require('express');

var router = express.Router();

var User = require("./userModel.js");

// Routes

// Route to post our form submission to mongoDB via mongoose
router.post("/submit", function(req, res) {
    // Create a new user using req.body
    User.create(req.body)
      .then(function(dbUser) {
        // If saved successfully, send the the new User document to the client
        res.json(dbUser);
      })
      .catch(function(err) {
        // If an error occurs, send the error to the client
        res.json(err);
      });
  });