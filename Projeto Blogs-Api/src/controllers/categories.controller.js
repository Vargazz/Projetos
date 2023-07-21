const categoriesService = require('../services/categories.service');

const createCategory = async (req, res) => {
    const { name } = req.body;
    const { status, message, category } = await categoriesService.createCategory(name);
    if (message) return res.status(status).json({ message });
    res.status(status).json(category);
};

const getAllCategories = async (req, res) => {
    const { status, categories } = await categoriesService.getAllCategories(req);
    res.status(status).json(categories);
  };
  
  module.exports = {
    createCategory,
    getAllCategories,
  };