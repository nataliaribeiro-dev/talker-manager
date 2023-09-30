const { categoryService } = require('../services');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const newCategory = await categoryService.createCategory(name);

  res.status(201).json(newCategory);
};

const getAllCategories = async (_req, res) => {
  const categories = await categoryService.getAllCategories();

  res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getAllCategories,
};