const connection = require('./db/connection');

const getAllSales = async () => {
  const [sales] = await connection.execute(`
    SELECT sales_products.sale_id as saleId, sales.date, sales_products.product_id as productId, 
    sales_products.quantity
    FROM sales_products
    INNER JOIN sales
    ON sales.id = sales_products.sale_id
    ORDER BY sales_products.sale_id, sales_products.product_id;`);
  return sales;
};

const getSaleById = async (id) => {
  const [sale] = await connection.execute(`
    SELECT sales.date, sales_products.product_id as productId, sales_products.quantity
    FROM sales_products
    INNER JOIN sales
    ON sales.id = sales_products.sale_id
    WHERE sales_products.sale_id = ?
    ORDER BY sales_products.sale_id, sales_products.product_id`, [id]);
  return sale;
};

const addSalesProducts = async (product, insertId) => {
  const { productId, quantity } = product;
  connection.execute('INSERT INTO sales_products (sale_id, product_id, quantity) VALUES(?, ?, ?)',
     [insertId, productId, quantity]);
  return true;
};

const addNewSale = async (sale) => {
  const [{ insertId }] = await connection.execute('INSERT INTO sales (date) VALUES (NOW())');
  await Promise.all(sale.map((product) => addSalesProducts(product, insertId)));
  return { id: insertId };
};

const addProductsSolds = async (product) => {
  const { saleId, productId, quantity } = product;
  await connection.execute(`INSERT INTO sales_products (sale_id, product_id, quantity) 
  VALUES (?, ?, ?)`,
    [saleId, productId, quantity]);
  return { productId, quantity };
};

const updateSale = async (id, sale) => {
  const { productId, quantity } = sale;
  const query = `
  UPDATE StoreManager.sales_products
  SET quantity = ?
  WHERE sale_id = ?
  AND product_id = ?`;
  await connection.execute(query, [quantity, id, productId]);
  return { productId, quantity };
};

module.exports = {
  getAllSales,
  getSaleById,
  addNewSale,
  addProductsSolds,
  addSalesProducts,
  updateSale,
};