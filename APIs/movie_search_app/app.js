// start express application
var express = require('express');
// bind express to app variable
var app = express();
// request library for html request
var request = require('request');
app.set("view engine", "ejs");
// get request in express for results page

app.get('/', function(req, res){
  res.render('search');
})

app.get('/results', function(req, res){
  var query = req.query.search;
  var url = 'http://omdbapi.com?s=' + query;
  // request call om our api that will return a JSON object as a string
  // this request is calling the omdba movie database
  request(url, function(error, response, body){
    // checks that page is responding with a OK message 200
    if(!error && response.statusCode == 200) {
      var data = JSON.parse(body)
      res.render("results", {data: data});
    } 
  });
});

app.listen(process.env.PORT, process.env.IP, function(){
  console.log('Movie app has started!');
});

