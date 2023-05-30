const express = require('express');
const { getRelationships, addRelationships, deleteRelationships } = require('../controllers/relationships');

const relationRouter = express.Router()

relationRouter.get('/',getRelationships)
relationRouter.post('/',addRelationships)
relationRouter.delete('/',deleteRelationships)

module.exports = relationRouter