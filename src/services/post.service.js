const { BlogPost, PostCategory } = require('../models');

const createPost = async ({ title, content, categoryIds, userId }, transaction) => {
  const categoriesIds = await PostCategory.findAll({
    where: { categoryId: categoryIds },
  });

  const mappedCategoriesIds = categoriesIds.map((category) => category.id);

  if (mappedCategoriesIds.length !== categoryIds.length) {
    return false;
  }

  const newPost = await BlogPost.create(
    { title, content, userId },
    { transaction },
  );

  await newPost.addCategories(mappedCategoriesIds, { transaction });  

  return newPost;
};

// const getCategoriesIds = async (categoryIds) => {
//   const categories = await Category.findAll({ where: { id: categoryIds } });

//   return categories.map((category) => category.id);
// };

module.exports = {
  createPost,
  // getCategoriesIds,
};