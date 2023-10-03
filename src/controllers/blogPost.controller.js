const { postService } = require('../services');
const { User } = require('../models');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;
  const idUser = 1;

  const newPost = await postService.createPost({ title, content, categoryIds, userId: idUser });

  if (!newPost) return res.status(400).json({ message: 'one or more "categoryIds" not found' });

  return res.status(201).json({
    id: newPost.id,
    title: newPost.title,
    content: newPost.content,
    userId: newPost.userId,
    updated: newPost.updated,
    published: newPost.published,
  });
};

const postGetAll = async (req, res) => {
  const posts = await postService.postGetAll();

  return res.status(200).json(posts);
};

module.exports = {
  createPost,
  postGetAll,
};