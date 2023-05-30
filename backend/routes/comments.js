const express = require("express")
const { getComments, addComments } = require("../controllers/comment")


const commentRouter = express.Router()

commentRouter.get("/",getComments)
commentRouter.post("/",addComments)

module.exports = commentRouter