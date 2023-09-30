const validateLogin = require('./validationLogin');
const validateRegister = require('./userValidation');
const validateToken = require('./validateToken');
const validateCategoryName = require('./categoryNameValidation');
const postFieldsValidation = require('./postFieldsValidation');

module.exports = {
  validateLogin,
  validateRegister,
  validateToken,
  validateCategoryName,
  postFieldsValidation,
};