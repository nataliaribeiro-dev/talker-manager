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

module.exports = {
  register,
};