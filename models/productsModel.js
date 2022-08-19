const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM StoreManager.products';
  const [products] = await connection.execute(query);
  return products;
};

const getById = async (id) => {
  const query = 'SELECT * FROM StoreManager.products WHERE id = ?';
  const [product] = await connection.execute(query, [id]);
  return product;
};

const getByName = async (name) => {
  const query = 'SELECT * FROM StoreManager.products WHERE name = ?';
  const [result] = await connection.execute(query, [name]);
  return result;
};

const postNewItem = async (name) => {
  const query = 'INSERT INTO StoreManager.products(name) VALUE(?)';
  const [{ insertId }] = await connection.execute(query, [name]);
  const newProduct = {
    id: insertId,
    name,
  };
  return newProduct;
};

const update = async (id, name) => {
  const query = 'UPDATE StoreManager.products SET name=? WHERE id=?';
  await connection.execute(query, [name, id]);
  return { id, name };
};

const deleteProduct = async (id) => {
  const query = 'DELETE FROM StoreManager.products WHERE id=?';
  await connection.execute(query, [id]);
};

module.exports = {
  getAll,
  getById,
  getByName,
  postNewItem,
  update,
  deleteProduct,
};