const express = require('express');
const { getlikes, addLike, deleteLike } = require('../controllers/like');

const likeRouter = express.Router()

likeRouter.get('/',getlikes)
likeRouter.post('/',addLike)
likeRouter.delete('/',deleteLike)

module.exports = likeRouter