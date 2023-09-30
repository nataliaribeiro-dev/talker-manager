const { postService, categoryService } = require('../services');

const createPost = async (req, res) => {
  const { title, content, categoryIds } = req.body;

  const categoryIdExists = await categoryService.getCategoriesIds(categoryIds);

  if (!categoryIdExists.length !== categoryIds.length) {
    return res.status(400).json({ message: 'one or more "categoryIds" not found' });
  }

  const newPost = await postService.createPost(title, content, categoryIds);
  await newPost.setCategories(categoryIdExists);

  res.status(201).json({
    id: newPost.id,
    title: newPost.title,
    content: newPost.content,
    userId: newPost.userId,
    updated: newPost.updatedAt,
    published: newPost.published,
  });
};

module.exports = {
  createPost,
};