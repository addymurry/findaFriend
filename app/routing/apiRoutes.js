var Friend = require("../data/friend");
module.exports = function (app) {


  
  app.get("/api/friends", function (req, res) {
    res.json(Friend);
  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body;
    var newFriendScores = Friend.scores;
    console.log(newFriend);

    var totalDiff = 51;
    var matchName = "";
    var matchUrl = "";

    for (var i = 0; i < newFriend.length; i++) {
      var diff = 0;
      for (var j = 0; j < newFriendScores.length; j++) {
        diff += Math.abs(newFriend[i].scores[j] - newFriendScores[j])
      }

      if (diff < totalDiff) {
        totalDiff = diff;
        matchName = Friend[i].name;
        matchUrl = Friend[i].photo;
      }
    }

    Friend.push(newFriend);
    
    res.json({matchName: matchName, matchUrl: matchUrl});
  });
};