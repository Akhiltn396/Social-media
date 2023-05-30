
const  express = require("express")
const { getUser, updateUser } = require("../controllers/user")
const userRouter = express.Router()


userRouter.get("/find/:userId",getUser)
userRouter.put("/",updateUser)


module.exports = userRouter