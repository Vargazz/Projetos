const productService = require('../services/product.service');

const getProduct = async (_req, res) => {
  const { type, message } = await productService.getProduct();

  if (type) return res.status(type).json(message);

  return res.status(200).json(message);
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  const { type, message } = await productService.getProductById(id);

  console.log(message);

  if (type) return res.status(type).json({ message });

  return res.status(200).json(message);
};

const insertProduct = async (req, res) => {
  const { name } = req.body;

  const { type, message } = await productService.insertProduct(name);

  if (type) return res.status(type).json({ message });

  res.status(201).json(message);
};

const updateById = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  const obj = { id, name };
  const result = await productService.updateById(obj);

  if (result.status === 404) {
    return res.status(result.status).json({ message: result.message });
  }
  return res.status(result.status).json(result.message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const { status } = await productService.deleteProduct(id);
  res.status(status).end();
};

module.exports = {
  getProduct,
  getProductById,
  insertProduct,
  updateById,
  deleteProduct,
};