// === Dependencies === //
var path = require("path");




// === Routing === //

module.exports = function(app){

  // Route to Home Page
  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  // Route to Survey Page
  app.get("/survey", function(req, res) {
      res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // Route to Home Page with No Specification
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

};