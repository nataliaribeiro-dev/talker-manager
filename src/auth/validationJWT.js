const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const decodedToken = (authorization) => {
  const token = authorization.split(' ')[1];
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded.data;
};

module.exports = {
  jwt,
  secret: JWT_SECRET,
  jwtConfig,
  decodedToken,
};