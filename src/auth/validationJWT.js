const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const decodedToken = (authorization) => {
  const token = authorization.split(' ')[1];
  const decoded = jwt.verify(token, secret);
  return decoded;
};

module.exports = {
  jwt,
  secret,
  jwtConfig,
  decodedToken,
};