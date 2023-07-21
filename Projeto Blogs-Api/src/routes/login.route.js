const express = require('express');
const loginController = require('../controllers/user.controller');
const { isLoginValid } = require('../middlewares/validations');

const loginRouter = express.Router();

loginRouter.post('/', isLoginValid, loginController.userLogin);

module.exports = loginRouter;