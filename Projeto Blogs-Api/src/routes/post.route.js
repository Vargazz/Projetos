const express = require('express');
const postController = require('../controllers/post.controller');
const { validateToken } = require('../auth/token');

const postRouter = express.Router();

postRouter.get('/:id', validateToken, postController.getPostById);
postRouter.get('/', validateToken, postController.getAllPosts);

module.exports = postRouter;