# Layout and basic styling
* Create our header and footer partials 
* Add in Bootstrap
* 

# 
* Set up route to show form
* Add basic unstyled form

# Style campgrounds page
* Add better header/title
* Make campgrounds display in grid

# Style navbar and form
* Add navbar to all templates
* Style the new campgrounds form

# Add Mongoose
* Install and configure mongoose
* Setup campground model 
* Use campground model inside of our routes

# Show Page
* Review the RESTful routes we've seen so far
* Add description to our campground model
* Show db.collection.drop()
* Add a show route/template

RESTFUL routes

name   |  url       |  verb  |  desc.
=========================================
INDEX  |  /dogs     |  GET   |  Display a list of all dog
NEW    |  /dogs/new |  GET   |  Displays form to make a new dog
CREATE |  /dogs     |  POST  |  Add new dog to DB
SHOW   |  /dogs/:id |  GET   |  Shows info about one dog

# Refactor Mongoose Code
* Create a models directory
* Use module.exports
* Require everything correctly

# Add Seeds File
* Add a seeds.js file
* Run a seeds file every time the server starts

# Add the comment model!
* Make our errors go away
* Display comments on campground show page

# Comment New/Create
* Discuss Nested Routes
* Add New Comment/Create Routes
* Add the new comment form

INDEX |  /campgrounds     | GET
NEW   |  /campgrounds/new | GET
CREATE|  /campgrounds/    | POST
SHOW  |  /campgrounds/:id | GET

# Nested routes
NEW   | /campgrounds/comments/:id/new | GET
CREATE | /campgrounds/comments/:id/   | POST
* comments are dependent on campground
* we have to make comment/assoc with campground(findbyId), connect them and save them

# Style Show Page
* Add sidebar to show page
* Display comments nicely
