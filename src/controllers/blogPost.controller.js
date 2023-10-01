const { sequelize, Category } = require('../models');
const { postService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;

  await sequelize.transaction(async (t) => {
    const categoryIdExists = await Category.findAll({ where: { id: categoryIds } });

    if (categoryIdExists.length !== categoryIds.length) {
      return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const newPost = await postService.createPost({ title, content, categoryIds, userId }, t);

    return res.status(201).json({
      id: newPost.id,
      title: newPost.title,
      content: newPost.content,
      userId: newPost.userId,
      updated: newPost.updated,
      published: newPost.published,
    });
  });
};

module.exports = {
  createPost,
};