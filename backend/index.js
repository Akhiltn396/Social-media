const express = require("express");
const cors = require("cors");
const multer = require("multer");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/users");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/posts");
const commentRouter = require("./routes/comments");
const likeRouter = require("./routes/likes");
const relationRouter = require("./routes/relationship");

// const likeRouter = require("./routes/like.js");
const app = express();

app.use((req, res, next) => {
  //for sending cookies to the client side
  res.header("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000", //client url
  })
);
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../frontend/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload",upload.single("file"),(req,res)=>{
    const file = req.file
    res.status(200).json(file.filename)
})

app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/comments",commentRouter);
app.use("/api/likes",likeRouter)
app.use("/api/auth", authRouter);
app.use("/api/relationships", relationRouter);

app.listen(3002, () => {
  console.log("Server is ready at port 3002");
});
