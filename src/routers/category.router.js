const express = require('express');

const { categoryController } = require('../controllers');

const { validateToken, validateCategoryName } = require('../middlewares');

const router = express.Router();

router.post(
  '/', 
  validateToken,
  validateCategoryName.categoryNameValidation, 
  categoryController.createCategory,
);

router.get('/', validateToken, categoryController.getAllCategories);

module.exports = router;