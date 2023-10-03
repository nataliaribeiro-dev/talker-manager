const jwt = require('jsonwebtoken');
const { User } = require('../models');
const { secret, jwtConfig } = require('../auth/validationJWT');

const register = async ({ displayName, email, password, image }) => {
  const existingUser = await User.findOne({ where: { email } });
  console.log('existing', existingUser);

  if (existingUser) return { message: 'User already registered' };

  await User.create({ displayName, email, password, image });

  const findUserById = await User.findOne({ where: { email } });

  const { id } = findUserById.dataValues;

  const token = jwt.sign({ payload: { email, id } }, secret, jwtConfig);
  
  return { message: token };
};

const getAllUsers = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return { status: null, message: users };
};

const getUserById = async (id) => {
  const user = await User.findByPk(id, { attributes: { exclude: ['password'] } });

  if (!user) return { status: 404, message: 'User does not exist' };

  return { status: null, message: user };
};

module.exports = {
  register,
  getAllUsers,
  getUserById,
};