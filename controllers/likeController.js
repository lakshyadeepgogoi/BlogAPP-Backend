
//import Models
const Post = require("../models/postModel");
const Like = require("../models/likeModel");


//Like a post

exports.likePost = async (req,res) => {
    try{
        const {post, user} = req.body;
        const like = new Like({
            post, user,
        });
        const savedLike = await like.save();

        //Update the post collection basic on this
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {likes:savedLike._id}}, {new:true}).populate("likes").exec();

        //answer return
        res.json({
            post:updatedPost,
        });

 
    }
    catch(error){
        return res.status(400).json({
            error:"Error  WHile Liking  Post",
        });

    }
}


//Unlike a post
exports.unlikePost = async (req,res) => {
    try{
        const{post, like} = req.body;
        //Find and delete the like collection me se
        const deletedLike = await Like.findOneAndDelete({post:post, _id:like});

        //Update the post collection
        const updatedPost = await Post.findByIdAndUpdate(post,
                                                         {$pull: {likes: deletedLike._id} }, {new:true}); //new true is to show updated one

        res.json({
            post:updatedPost,
        });

 
    }
    catch(error){
        return res.status(400).json({
            error:"Error  WHile Unliking Post ",
        });

    }
}


exports.dummyLink = (req,res) => {
    res.send("This is your Dummy Page");
};