const salesService = require('../services/salesService');

const getSalesController = async (_req, res) => {
  const getAll = await salesService.getAllService();
  console.log(getAll);
  return res.status(200).json(getAll);
};

const getSaleById = async (req, res) => {
  try {
    const { id } = req.params;
    const getId = await salesService.getByIdService(Number(id));
    if (getId.length === 0) return res.status(404).json({ message: 'Sale not found' });
    return res.status(200).json(getId);
  } catch (error) {
    return error;
  }
};

module.exports = {
  getSalesController,
  getSaleById,
};