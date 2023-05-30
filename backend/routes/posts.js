const express = require("express");
const {getPosts,addPost,deletePost} = require("../controllers/post");

const postRouter = express.Router()

postRouter.get("/",getPosts)
postRouter.post("/",addPost)
postRouter.delete("/:id",deletePost)



module.exports = postRouter