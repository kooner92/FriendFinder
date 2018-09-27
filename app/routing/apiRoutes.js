var friendsData = require("../data/friends");
var express = require("express");

var app = express();

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(friendsData)
    })
};

app.post("/api/friends", function (req, res) {
    friends.push(req.body);
    res.json(true);

});