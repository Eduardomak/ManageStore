const connection = require('./connection');

const getAllSales = async () => {
  const query = `SELECT
  P.sale_id AS saleId, S.date, P.product_id AS productId, P.quantity
  FROM
    StoreManager.sales_products AS P
        INNER JOIN
    StoreManager.sales AS S ON P.sale_id = S.id;`;
  const [sales] = await connection.execute(query);
  return sales;
};

const getSalesById = async (id) => {
  const query = `SELECT
  S.date, P.product_id AS productId, P.quantity
FROM
    StoreManager.sales_products AS P
        INNER JOIN
    StoreManager.sales AS S ON P.sale_id = S.id
WHERE P.sale_id = ?;`;
  const [saleId] = await connection.execute(query, [id]);
  return saleId;
};

module.exports = {
  getAllSales,
  getSalesById,
};