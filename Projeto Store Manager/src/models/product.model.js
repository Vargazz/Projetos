const connection = require('./db/connection');

const getAllProducts = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products', [],
  );
  return result;
};

const getProductById = async (id) => {
  const [[result]] = await connection.execute(
    'SELECT * FROM products WHERE id = ?', [id],
  );
  return result;
};

const insertProduct = async (name) => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO products (name) VALUE (?)',
    [name],
  );
  return { id: insertId, name };
};

const updateById = async (product) => {
  const [result] = await connection.execute(
    'UPDATE products SET name = ? WHERE id = ? ',
    [product.name, product.id],
  );
  return result;
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM products WHERE id = ?';
  await connection.execute(query, [id]);
  return true;
};

module.exports = {
  getAllProducts,
  getProductById,
  insertProduct,
  updateById,
  deleteProduct,
};