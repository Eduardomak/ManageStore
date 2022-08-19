const salesModel = require('../models/salesModel');

const getAllService = async () => {
  const getAllSales = await salesModel.getAllSales();
  return getAllSales;
};

const getByIdService = async (id) => {
  const getById = await salesModel.getSalesById(id);
  return getById;
};

module.exports = {
  getAllService,
  getByIdService,
};