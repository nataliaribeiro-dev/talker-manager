const { postService } = require('../services');
const { User, PostCategory, sequelize } = require('../models');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const userId = req.user.id;

  const newPost = await postService.createPost(
    { title, content, categoryIds },
    userId,
  );

  if (!newPost) {
    return res.status(400).json({
      message: 'one or more "categoryIds" not found',
    });
  }

  return res.status(201).json(newPost);
};

const postGetAll = async (req, res) => {
  const posts = await postService.postGetAll();

  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  postGetAll,
};