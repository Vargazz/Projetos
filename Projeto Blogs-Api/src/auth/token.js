const jwt = require('jsonwebtoken');

require('dotenv/config');

const configJWT = {
  algorithm: 'HS256',
  expiresIn: '20min',
};

const secret = process.env.JWT_SECRET || 'secret';

const createToken = async (data) => {
  const token = jwt.sign({ data }, secret, configJWT);
  return token;
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, secret);

    req.decoded = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = { createToken, validateToken };