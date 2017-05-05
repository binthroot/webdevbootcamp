var express = require('express');
var app = express(); 
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

var campgrounds = [
          {name: "Salmon Creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
          {name: "Granite Hill", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
          {name: "Mountain Goat Rest", image:"https://farm7.staticflickr.com/6210/6090170567_6df55f8d83.jpg"},
          {name: "Salmon Creek", image:"https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg"},
          {name: "Granite Hill", image:"https://farm8.staticflickr.com/7252/7626464792_3e68c2a6a5.jpg"},
          {name: "Mountain Goat Rest", image:"https://farm7.staticflickr.com/6210/6090170567_6df55f8d83.jpg"}
        ] 

app.get('/', function(req, res){
    res.render('landing');
});

app.get('/campgrounds', function(req, res){
        
        res.render("campgrounds", {campgrounds:campgrounds});
})

app.post('/campgrounds', function(req, res) {
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image : image};
    campgrounds.push(newCampground);
    // get data from form and add to campgrounds array
    // redirect back to campgrounds page
    res.redirect('/campgrounds');
});

app.get("/campgrounds/new", function(req, res) {
    res.render("new.ejs");
})

 
app.listen(process.env.PORT, process.env.IP, function(){ 
    console.log("The YelpCamp Server has Started!");
});
