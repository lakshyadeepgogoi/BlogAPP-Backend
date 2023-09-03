const express = require("express");
const router = express.Router();

//Import Controller
const {dummyLink, likePost, unlikePost} = require("../controllers/likeController");
const {createComment} = require("../controllers/CommentController")
const {createPost, getAllPosts} = require("../controllers/PostController");


//Mapping Create
router.get("/dummyroute",dummyLink);
router.post("/comments/create", createComment );
router.post("/comments/create", createComment );
router.get("/posts", getAllPosts );
router.post("/likes/like", likePost);
router.post("/likes/unlike", unlikePost);



//Export
module.exports = router;