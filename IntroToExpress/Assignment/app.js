var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hi there, welcome to my assignment!");
});

app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    var sounds = {
        pig: "Oink",
        cow: "Moo",
        dog: "Woof Woof!",
        cat: "I hate you human",
        goldfish: "..."
    }

    res.send("The " + animal + " says '" + sounds[animal] + "'");
});


app.get("/repeat/:text/:num", function(req, res){
    res.send((req.params.text + " ").repeat(req.params.num));
});

app.get("*", function(req, res){
    res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started");
});