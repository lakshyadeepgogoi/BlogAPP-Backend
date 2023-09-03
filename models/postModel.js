//Import Mongoose
const mongoose = require("mongoose");


//Route Handler
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required:true,
    },
    body: {
        type:String,
        required:true,
    },
    likes:[{ //Array
        type: mongoose.Schema.Types.ObjectId,
        ref: "Like",
    }],
    comments: [{ //Array
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
    }]

});


//Export
module.exports = mongoose.model("Post", postSchema);