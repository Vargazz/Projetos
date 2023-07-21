import { Request, Response } from 'express';
import productsService from '../services/productService';

const getAll = async (_req: Request, res: Response):Promise<void> => {
  const products = await productsService.getAll();
  res.status(200).json(products);
};

const productCreate = async (req: Request, res: Response):Promise<void> => {
  const product = req.body;
  const productCreated = await productsService.productCreate(product);
  res.status(201).json(productCreated);
};

export default {
  getAll,
  productCreate,
};