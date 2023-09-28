const jwt = require('jsonwebtoken');

const { secret } = require('../auth/validationJWT');

const validateToken = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const token = authorization.split(' ')[1];
  
  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    
    next();
  } catch (error) {
    res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = validateToken;