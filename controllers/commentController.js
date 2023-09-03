//Import Model
const Post = require("../models/postModel");
const Comment = require("../models/commentModel");

//Buisness Logic

exports.createComment = async (req, res) => {
    try{
        //fetch data from req body
        const {post, user, body} = req.body;
        //create a comment object
        const comment = new Comment ({
            post,user,body
        });

        //Save th enew comment into the DB
        const savedComment = await comment.save();

        //Find the post by ID and the new comment will add the new comment to its comments array
        const updatedPost = await Post.findByIdAndUpdate(post, {$push: {comments: savedComment._id}}, {new:true} ) //Push to add
                            .populate("comments") //Populate the comments array with comment documents
                            .exec();
        res.json({
            post: updatedPost,
        });

    }
    catch(error){
        return res.status(500).json({
            error:"Error while creating comment",
        });
    }
};