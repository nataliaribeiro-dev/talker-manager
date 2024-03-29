const express = require('express');

const { loginController } = require('../controllers');

const { validateLogin } = require('../middlewares');

const router = express.Router();

router.post('/', validateLogin.validationLogin, loginController.login);

module.exports = router;