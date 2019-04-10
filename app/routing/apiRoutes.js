// === Variables === //

var friendsData = require("../data/friends");
var path = require("path");



module.exports = function(app){

    app.get("/api/friends", function(req, res){
        res.json(friendsData)
    });

    app.post("/api/friends", function(req, res){
        var userInput = req.body;
        var friendsScore = friendsData.scores;
		var userResponses = userInput.scores;
		
		var matchName = "";
		var matchImage = "";
		var totalDifference = ""; 

		
		for (var i = 0; i < friendsScore.length; i++) {
			
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friendsScore[i].scores[j] - userResponses[j]);
			}
			
			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friendsData[i].name;
				matchImage = friendsData[i].photo;
			}
		}

        friendsData.push(userInput)
        // Send appropriate response
		res.json({status: "OK", matchName: matchName, matchImage: matchImage});
    });

};