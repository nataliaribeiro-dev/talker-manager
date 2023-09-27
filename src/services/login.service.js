const { User } = require('../models');

const { jwt, secret, jwtConfig } = require('../auth/validationJWT');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { error: { type: 400, message: 'Invalid fields' } };

  const token = jwt.sign({ data: user }, secret, jwtConfig);

  return { status: null, message: token };
};

module.exports = {
  login,
};
