const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { secret, jwtConfig } = require('../auth/validationJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { status: 400, message: 'Invalid fields' };

  const token = jwt.sign({ data: { email } }, secret, jwtConfig);

  return { message: token };
};

module.exports = {
  login,
};
