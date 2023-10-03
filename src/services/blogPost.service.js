const { BlogPost, Category, User } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }) => {
  const categories = await Category.findAll({
    where: { id: categoryIds },
  });

  const mappedCategoriesIds = categories.map((category) => category.id);

  if (mappedCategoriesIds.length !== categoryIds.length) {
    return false;
  }

  const idUser = 1;

  const newPost = await BlogPost.create(
    { title, content, userId: idUser },
  );

  await newPost.addCategories(categories);

  return newPost;
};

const postGetAll = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });

  return posts;
};

module.exports = {
  createPost,
  postGetAll,
};