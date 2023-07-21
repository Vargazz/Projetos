import ordersModel from '../models/orderModel';
import { Order } from '../interfaces/IOrder';

const getAll = async (): Promise<Order[]> => {
  const orders = await ordersModel.getAll();
  return orders;
};

export default {
  getAll,
};