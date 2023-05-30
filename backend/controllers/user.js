const db = require("../config/connect");
const jwt = require("jsonwebtoken");



const getUser = (req,res) =>{
const userId = req.params.userId;
const q = "SELECT * FROM users WHERE id = ?";

db.query(q,[userId],(err,data)=>{
    if(err) return res.status(500).json(err)
    const {password,...info} = data[0];
    return res.json(info)
})

}

const updateUser = (req, res) => {
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("Not authenticated!");

    jwt.verify(token, "secret-key", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");

      const q =
        "UPDATE users SET `name`=?,`city`=?,`website`=?,`profilePic`=?,`coverPic`=? WHERE id=? ";

      db.query(
        q,
        [
          req.body.name,
          req.body.city,
          req.body.website,
          req.body.coverPic,
          req.body.profilePic,
          userInfo.id,
        ],
        (err, data) => {
          if (err) res.status(500).json(err);
          console.log(data.affectedRows);
          if (data.affectedRows > 0) return res.json("Updated!"); //if any change happened to the row or row updated
          return res.status(403).json("You can update only your post!"); //if any change never happened
        }
      );
    });
  };

module.exports = {getUser,updateUser}