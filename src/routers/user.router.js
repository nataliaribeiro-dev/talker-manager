const express = require('express');

const { userController } = require('../controllers');

const { validateRegister } = require('../middlewares');

const router = express.Router();

router.post('/', validateRegister.validationRegister, userController.register);

module.exports = router;