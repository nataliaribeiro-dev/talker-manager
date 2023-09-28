const { userService } = require('../services');

const register = async (req, res) => {
  const { displayName, email, password, image } = req.body;
  const result = await userService.register({ displayName, email, password, image });

  const { message } = result;

  if (message === 'User already registered') {
    return res
      .status(409).json({ message: 'User already registered' }); 
  }

  return res.status(201).json({ token: message });
};

const getAllUsers = async (req, res) => {
  const allUsers = await userService.getAllUsers();

  const { message } = allUsers;

  return res.status(200).json(message);
};

const getUserById = async (req, res) => {
  const { id } = req.params;
  const { status, message } = await userService.getUserById(id);

  if (status) {
    return res.status(status).json({ message });
  }

  return res.status(200).json(message);
};

module.exports = {
  register,
  getAllUsers,
  getUserById,
};