import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { Product } from '../interfaces/IProducts';
import connection from './connection';

const getAll = async (): Promise<Product[]> => {
  const [products] = await connection
    .execute<RowDataPacket[] & Product[]>('SELECT * FROM Trybesmith.products;');
  return products;
};

const productCreate = async (product: Product): Promise<Product> => {
  const query = 'INSERT INTO Trybesmith.products (name, amount) VALUES (?,?)';
  const [response] = await connection
    .execute<ResultSetHeader>(query, [product.name, product.amount]);
  const productCreated = { id: response.insertId, ...product }; 
  return productCreated;
};

export default {
  getAll,
  productCreate,
};