const express = require('express');
const salesController = require('../controllers/sale.controller');
const { validateProductId,
  validateProductQuantity,
  validateProductExist } = require('../middlewares/validateSale');

const saleRouter = express.Router();

saleRouter.get('/', salesController.getAllSales);

saleRouter.get('/:id', salesController.getSaleById);

saleRouter.post('/', validateProductId, validateProductExist, validateProductQuantity,
  salesController.addNewSale);

saleRouter.put('/:id', validateProductId, validateProductExist, validateProductQuantity,
  salesController.updateSale);

module.exports = saleRouter;