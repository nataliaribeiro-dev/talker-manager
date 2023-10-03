const jwt = require('jsonwebtoken');
const { User } = require('../models');

const { secret } = require('../auth/validationJWT');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  const token = authorization.split(' ')[1];

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }
  
  try {
    const decoded = jwt.verify(token, secret);
    const user = User.findByPk(decoded.payload.id);
    req.user = user;

    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;