const express = require('express');
const userController = require('../controllers/user.controller');
const { validateUser } = require('../middlewares/validations');
const { validateToken } = require('../auth/token');

const userRouter = express.Router();

userRouter.post('/', validateUser, userController.createUser);
userRouter.get('/', validateToken, userController.getAllUsers);
userRouter.get('/:id', validateToken, userController.getUserByID);

module.exports = userRouter;