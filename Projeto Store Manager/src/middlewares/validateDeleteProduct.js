const productModel = require('../models/product.model');

const validateProductDelete = async (req, res, next) => {
  const { id } = req.params;
  const product = await productModel.getProductById(id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  next();
};

module.exports = {
  validateProductDelete,
};