// === Dependencies === //
var express = require("express");

// Creating an express server through
var app = express();

// Setting initial port
var PORT = process.env.PORT || 8080;

// Setting up data paring with express
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("app"));


// Routing
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);


// Port listener
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT)
});