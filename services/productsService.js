const productsModel = require('../models/productsModel');

const getAllService = async () => {
  const getAllProducts = await productsModel.getAll();
  return getAllProducts;
};

const getByIdService = async (id) => {
  const [getProductsById] = await productsModel.getById(id);
  return getProductsById;
};

const errorHandler = (status, message) => ({
  status,
  message,
});

const postProductService = async (name) => {
/*   const getProduct = await productsModel.getByName(name);
  if (getProduct.length !== 0) throw errorHandler(409, 'Product already exists'); */
  const newProduct = await productsModel.postNewItem(name);
  return newProduct;
};

const updateService = async (id, name/* , quantity */) => {
  const getProduct = await productsModel.getById(id);
  if (getProduct.length === 0) throw errorHandler(404, 'Product not found');
  const update = productsModel.update(id, name/* , quantity */);
  return update;
};

const deleteService = async (id, array) => {
  const getProduct = await productsModel.getById(id);
  if (getProduct.length === 0) throw errorHandler(404, 'Product not found');
  const result = await productsModel.deleteProduct(id, array);
  return result;
};

module.exports = {
  getAllService,
  getByIdService,
  postProductService,
  updateService,
  deleteService,
};