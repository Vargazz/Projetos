const salesService = require('../services/sale.service');

const getAllSales = async (_req, res) => {
  const { status, sales } = await salesService.getAllSales();
  res.status(status).json(sales);
};

const getSaleById = async (req, res) => {
  const { id } = req.params;
  const { status, message, sale } = await salesService.getSaleById(id);
  if (message) return res.status(status).json({ message });
  res.status(status).json(sale);
};

const addNewSale = async (req, res) => {
  const { body } = req;
  const { status, id } = await salesService.addNewSale(body);
  res.status(status).json({ id, itemsSold: body });
};

const updateSale = async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const { status, message } = await salesService.updateSale(id, body);
  if (message) return res.status(status).json({ message });
  res.status(status).json({ saleId: id, itemsUpdated: body });
};

module.exports = {
  getAllSales,
  getSaleById,
  addNewSale,
  updateSale,
};