var express = require("express");
var app = express();
//comes from a seperate package called body parser that creates a body object
var bodyParser = require("body-parser");
//allows us to use bodyParser in our code
app.use(bodyParser.urlencoded({extended: true}));

app.set("view engine", "ejs");
var friends = ["Tony", "Miranda", "Justin", "Pierre", "Lily"];

app.get("/", function(req, res){
  res.render("home");
});
//when a post request is made an object is returned to us 
app.post("/addfriend", function(req, res){
  var newFriend = req.body.newfriend;
  friends.push(newFriend);
  res.redirect("/friends");
})

app.get("/friends", function(req, res){
  res.render("friends", {friends: friends});
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("server started!");
});
