const express = require('express');

const { userController } = require('../controllers');

const { validateRegister, validateToken } = require('../middlewares');

const router = express.Router();

router.post('/', validateRegister.validationRegister, userController.register);
router.get('/', validateToken, userController.getAllUsers);
router.get('/:id', validateToken, userController.getUserById);

module.exports = router;