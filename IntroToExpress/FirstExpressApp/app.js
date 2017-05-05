var express = require("express");
// we use function express as a variable through our application
var app = express();

// "/" => "Hi there!"
app.get("/", function(req, res) {
    res.send("Hi there!");
});
// "/bye" => "Goodbye!"
app.get("/bye", function(req, res){
    res.send("Goodbye");
})
// "/dog" => "Meow!"
app.get("/dog", function(req, res){
    console.log("Someone made a request to /dog");
    res.send("Ruff Ruff");
})

app.get("/r/:subreddit", function(req, res){
    console.log(req.params);
    res.send("Welcome to the " + req.params.subreddit + " subreddit");
})

app.get("*", function(req, res){
    res.send("You are a star!");
})

// Tell Express to listen for request (start sever)

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});