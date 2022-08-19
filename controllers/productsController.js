const productsService = require('../services/productsService');

const getAllController = async (_req, res) => {
  try {
    const response = await productsService.getAllService();
    return res.status(200).json(response);
  } catch (error) {
    return error;
  }
};

const getByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await productsService.getByIdService(Number(id));
    if (!response) return res.status(404).json({ message: 'Product not found' });
    return res.status(200).json(response);
  } catch (error) {
    return error;
  }
};

const postProductController = async (req, res, next) => {
  try {
    /* await console.log(req.body); */
    const { name } = req.body;
    const newProduct = await productsService.postProductService(name);
    return res.status(201).json(newProduct);
  } catch (err) {
    /* console.log('erro :', err.message);
    console.log(req.body); */
    next(err);
  }
};

const updateController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const update = await productsService.updateService(id, name);
    res.send(update);
  } catch (err) {
    console.log('erro :', err.message);
    next(err);
  }
};

const deleteController = async (req, res, next) => {
  try {
    const { id } = req.params;

    await productsService.deleteService(id);

    res.status(204).end();
  } catch (err) {
    console.log('erro :', err.message);
    next(err);
  }
};

module.exports = {
  getAllController,
  getByIdController,
  postProductController,
  updateController,
  deleteController,
};