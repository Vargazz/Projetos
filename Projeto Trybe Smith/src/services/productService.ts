import productsModel from '../models/productModel';
import { Product } from '../interfaces/IProducts';

const getAll = async ():Promise<Product[]> => {
  const books = await productsModel.getAll();
  return books;
};

const productCreate = async (product: Product):Promise<Product> => {
  const productCreated = await productsModel.productCreate(product);
  return productCreated;
};

export default {
  getAll,
  productCreate,
};