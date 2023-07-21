const express = require('express');
const { getProduct, getProductById,
  insertProduct, updateById, deleteProduct } = require('../controllers/product.controller');
const { validateProduct } = require('../middlewares/validateProduct');

const { validateProductDelete } = require('../middlewares/validateDeleteProduct');

const productRouter = express.Router();

productRouter.get('/', getProduct);

productRouter.get('/:id', getProductById);

productRouter.post('/', validateProduct, insertProduct);

productRouter.put('/:id', validateProduct, updateById);

productRouter.delete('/:id', validateProductDelete, deleteProduct);

module.exports = productRouter;