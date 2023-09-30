// const jwt = require('jsonwebtoken');
const { Category } = require('../models');
// const { secret, jwtConfig } = require('../auth/validationJWT');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};