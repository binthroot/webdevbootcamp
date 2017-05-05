var express    = require('express'),
    methodOverride = require("method-override"),
    expressSanitizer = require("express-sanitizer"),
    app        = express(),
    bodyParser = require('body-parser'),
    mongoose   = require('mongoose')

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));

// MONGOOSE/MODEL CONFIG
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});

// Creating the database model, the object that all data will go into and come out of
var Blog = mongoose.model("Blog", blogSchema);

// RESTful Routes
app.get('/', function(req, res){
    res.redirect('/blogs');
});


//INDEX ROUTE
app.get("/blogs", function(req, res){
    // Mongo call to find data in database
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("Error!");
        } else {
            // Renders data from the find command into the index page        
            res.render("index", {blogs: blogs});
        }
    }) 
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render('new');
});

//CREATE ROUTE
app.post("/blogs", function(req,res){
	// create blog
	console.log(req.body);
	req.body.blog.body = req.sanitize(req.body.blog.body);
	console.log("===============")
	console.log(req.body);
	Blog.create(req.body.blog, function(err, newBlog){
		if(err){
			res.render("new");
		} else {
			res.redirect("blogs");
		}
	});
});

// SHOW ROUTE
app.get("/blogs/:id", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err) {
            console.log(err);
            res.redirect("/blogs");
        } else {
            res.render("show", {blog: foundBlog});
        }
    });
});

// EDIT ROUTE
app.get("/blogs/:id/edit", function(req, res){
    Blog.findById(req.params.id, function(err, foundBlog){
        if(err){
            res.redirect("/blogs");
        } else {
            res.render("edit", {blog: foundBlog});
        }
    });
});

// UPDATE ROUTE
app.put("/blogs/:id/", function(req, res){
    req.body.blog.body = req.sanitize(req.body.blog.body);
    Blog.findByIdAndUpdate(req.params.id, req.body.blog, function(err, updateBlog){
       if(err){
           res.redirect("/blogs");
       } else {
           res.redirect("/blogs/" + req.params.id);
       }
   });
});

// DELETE ROUTE
app.delete("/blogs/:id", function(req, res){
    //destroy blog
    Blog.findByIdAndRemove(req.params.id, function(err){
        if(err){
            res.redirect("/blogs");
        } else {
            res.redirect("/blogs");
        }
    });
    //redirect somewhere
});

app.listen(process.env.PORT, process.env.IP, function() {
	console.log("Server is running");
});
