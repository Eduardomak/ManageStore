const joi = require('joi');

const schemaProduct = joi.object().keys({
  name: joi.string().min(5).required(),
});

function validateProduct(req, res, next) {
  const { error } = schemaProduct.validate(req.body);
  console.log(error);
  if (error && error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.message });
  }
  if (error && error.details[0].type === 'string.min') {
    return res.status(422).json({ message: error.message });
  }
  next();
}

module.exports = validateProduct;