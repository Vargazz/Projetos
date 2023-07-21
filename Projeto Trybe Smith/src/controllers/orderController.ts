import { Request, Response } from 'express';
import orderService from '../services/orderService';

const getAll = async (_req: Request, res: Response):Promise<void> => {
  const orders = await orderService.getAll();
  res.status(200).json(orders);
};

export default {
  getAll,
};