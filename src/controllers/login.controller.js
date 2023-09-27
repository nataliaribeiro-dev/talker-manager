const loginService = require('../services');

const login = async (req, res) => {
  const { email, password } = req.body;

  const result = await loginService.login(email, password);

  if (result.error) return res.status(result.error.type).json({ message: result.error.message });

  res.status(200).json({ token: result.message });
};

module.exports = login;
