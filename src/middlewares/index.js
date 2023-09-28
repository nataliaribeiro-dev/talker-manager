const validateLogin = require('./validationLogin');
const validateRegister = require('./userValidation');
const validateToken = require('./validateToken');

module.exports = {
  validateLogin,
  validateRegister,
  validateToken,
};