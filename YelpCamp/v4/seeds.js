var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://cdn.pixabay.com/photo/2016/11/21/15/14/camping-1845906_960_720.jpg",
        description: "The crisp skies of the big wide world view"
    },
    {
        name: "Cold Place",
        image: "https://cdn.pixabay.com/photo/2017/03/26/14/44/night-view-2175731_960_720.jpg",
        description: "Bring a very warm sleeping bag"
    },
    {
        name: "The Mesa",
        image: "https://cdn.pixabay.com/photo/2017/03/14/22/04/tents-2144577_960_720.jpg",
        description: "Can someone please lookup Mesa in the dictionary"
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