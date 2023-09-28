const jwt = require('jsonwebtoken');

const { User } = require('../models');

const { secret, jwtConfig } = require('../auth/validationJWT');

const register = async ({ displayName, email, password, image }) => {
  const existingUser = await User.findOne({ where: { email } });

  if (existingUser) return { message: 'User already registered' };

  const newUser = await User.create({ displayName, email, password, image });
      
  const newUserWithoutPassword = {
    displayName: newUser.displayName,
    email: newUser.email,
    image: newUser.image,
  };
  
  const token = jwt.sign({ data: newUserWithoutPassword }, secret, jwtConfig);
  
  return { message: token };
};

module.exports = {
  register,
};