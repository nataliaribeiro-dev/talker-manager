const express = require('express');

const { loginController } = require('../controllers');

const route = express.Router();

// const { validateLogin } = require('../middlewares');

route.post('/login', loginController.login);

module.exports = route;