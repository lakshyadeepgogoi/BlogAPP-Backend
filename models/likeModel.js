//Import Mongoose
const mongoose = require("mongoose");


//route Handler

const likeSchema = new mongoose.Schema({
    post:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post", //Reference to the post model


    },
    user: {
        type:String,
        required:true,
    },
});

//export
module.exports = mongoose.model("Like", likeSchema);
