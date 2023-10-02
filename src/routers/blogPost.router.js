const express = require('express');

const { blogPostController } = require('../controllers');

const { validateToken } = require('../middlewares');
const { postFieldsValidation } = require('../middlewares');

const router = express.Router();

router.post(
  '/', 
  validateToken,
  postFieldsValidation.postFieldsValidation, 
  blogPostController.createPost,
);

router.get('/', validateToken, blogPostController.postGetAll);

module.exports = router;