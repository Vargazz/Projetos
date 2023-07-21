import { RowDataPacket } from 'mysql2';
import { Order } from '../interfaces/IOrder';
import connection from './connection';

const getProducts = async (id: number): Promise<number[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & number[]>(`SELECT id FROM Trybesmith.products 
    WHERE order_id = ?`, [id]);
  const array = products.map(((product) => product.id));
  return array;
};

const getAll = async (): Promise<Order[]> => {
  const [orders] = await connection
    .execute<RowDataPacket[]>('SELECT * FROM Trybesmith.orders;');
  const ordersWithProducts = await Promise.all(orders.map(async (order): Promise<Order> => { 
    const products = await getProducts(order.id);
    await Promise.all(products);
    return {
      id: order.id,
      userId: order.user_id,
      productsIds: products,
    };
  }));
  return ordersWithProducts;
};

export default {
  getAll,
};