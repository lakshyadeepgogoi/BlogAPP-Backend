//Import Mongoose
const mongoose = require("mongoose");


//Route Handler
const commentSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //Reference to the post model


    },
    user: {
        type:String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    }
});


//export
module.exports = mongoose.model("Comment", commentSchema);