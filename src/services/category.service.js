const { Category } = require('../models');

const createCategory = async (name) => {
  const newCategory = await Category.create({ name });

  return newCategory;
};

const getAllCategories = async () => {
  const categories = await Category.findAll();

  return categories;
};

const getCategoriesIds = async (categoryIds) => {
  const categories = await Category.findAll({
    where: { id: categoryIds },
  });

  const mappedCategories = categories.map((category) => category.id);

  return mappedCategories;
};

module.exports = {
  createCategory,
  getAllCategories,
  getCategoriesIds,
};