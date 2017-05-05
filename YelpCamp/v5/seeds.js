var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://images.pexels.com/photos/192518/pexels-photo-192518.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "Bacon ipsum dolor amet andouille pork loin alcatra, chuck meatloaf filet mignon ground round pork belly kevin pork chop. Alcatra pig flank filet mignon shankle meatball corned beef capicola turducken biltong andouille ribeye. Sirloin tail ribeye ground round salami, strip steak venison short loin ball tip shankle. Fatback prosciutto pork boudin tongue beef, bresaola kielbasa jerky pancetta shank pastrami tail."
    },
    {
        name: "Cold Place",
        image: "https://images.pexels.com/photos/67440/pexels-photo-67440.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "Bacon ipsum dolor amet andouille pork loin alcatra, chuck meatloaf filet mignon ground round pork belly kevin pork chop. Alcatra pig flank filet mignon shankle meatball corned beef capicola turducken biltong andouille ribeye. Sirloin tail ribeye ground round salami, strip steak venison short loin ball tip shankle. Fatback prosciutto pork boudin tongue beef, bresaola kielbasa jerky pancetta shank pastrami tail."
    },
    {
        name: "The Mesa",
        image: "https://images.pexels.com/photos/104864/pexels-photo-104864.jpeg?h=350&auto=compress&cs=tinysrgb",
        description: "Bacon ipsum dolor amet andouille pork loin alcatra, chuck meatloaf filet mignon ground round pork belly kevin pork chop. Alcatra pig flank filet mignon shankle meatball corned beef capicola turducken biltong andouille ribeye. Sirloin tail ribeye ground round salami, strip steak venison short loin ball tip shankle. Fatback prosciutto pork boudin tongue beef, bresaola kielbasa jerky pancetta shank pastrami tail."
    },
];

function seedDB() {
    //Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds!");
        //add a few campgrounds
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err)
                } else {
                    console.log("added a campground")
                    //create a comment
                    Comment.create(
                        {
                            text: "This place is great, no wifi though.",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                            } else {
                                campground.comments.push(comment);
                                campground.save();
                                console.log("Created new comment");
                            }
                        }
                    )
                }
            });
        });
    
    });
    
}

module.exports = seedDB;