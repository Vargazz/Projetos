const productModel = require('../models/product.model');

const getProduct = async () => {
  const result = await productModel.getAllProducts();
  return { type: null, message: result };
};

const getProductById = async (id) => {
  const result = await productModel.getProductById(id);

  if (!result) return { type: 404, message: 'Product not found' };

  return { type: null, message: result };
};

const insertProduct = async (name) => {
  const result = await productModel.insertProduct(name);
  console.log(result);
  return { type: null, message: result };
};

const updateById = async (product) => {
  const { id } = product;

  const valited = await productModel.getProductById(id);

  if (valited) {
    await productModel.updateById(product);
    return { message: product, status: 200 };
  }
  return { message: 'Product not found', status: 404 };
};

const deleteProduct = async (id) => {
  await productModel.deleteProduct(id);
  return { status: 204 };
};

module.exports = {
  getProduct,
  getProductById,
  insertProduct,
  updateById,
  deleteProduct,
};