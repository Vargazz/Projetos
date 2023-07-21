const express = require('express');
const categoriesController = require('../controllers/categories.controller');
const { validateToken } = require('../auth/token');

const categoryRoute = express.Router();

categoryRoute.post('/', validateToken, categoriesController.createCategory);
categoryRoute.get('/', validateToken, categoriesController.getAllCategories);

module.exports = categoryRoute;
