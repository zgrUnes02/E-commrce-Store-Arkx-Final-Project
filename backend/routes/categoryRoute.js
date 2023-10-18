const categoryController = require("../controllers/categoryController");
const { body } = require("express-validator");
const express = require("express");
const categoryRouter = express.Router();

//! Create new category
categoryRouter.post(
  "/categories",
  [
    body("category_name")
      .trim()
      .notEmpty()
      .withMessage("the category name is required"),
    body("active")
      .trim()
      .notEmpty()
      .withMessage("the category status is required")
      .isBoolean()
      .withMessage("the category status value is required"),
  ],
  categoryController.addNewCategory
);

//! Delete category
categoryRouter.delete("/categories/:id", categoryController.deleteCategory);

//! Get a category by ID
categoryRouter.get("/categories/:id", categoryController.getCategoryById);

//! Updating the category data
categoryRouter.put(
  "/categories/:id",
  [
    body("category_name")
      .trim()
      .notEmpty()
      .withMessage("the category name is required"),
    body("active")
      .trim()
      .notEmpty()
      .withMessage("the category status is required")
      .isBoolean()
      .withMessage("the category status value is required"),
  ],
  categoryController.updateCategory
);

//! Get all customers
categoryRouter.get("/categories" , categoryController.listingCategories);

//! Search for a customer
categoryRouter.get("/category" , categoryController.searchForCategory);

module.exports = categoryRouter;
