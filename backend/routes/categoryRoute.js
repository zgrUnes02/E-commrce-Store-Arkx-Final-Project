const categoryController = require("../controllers/categoryController");
const { body } = require("express-validator");
const express = require("express");
const categoryRouter = express.Router();
const authUserVerification = require('../middlewares/authUserVerification') ;

//! Create new category
categoryRouter.post(
  "/categories" , authUserVerification , 
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
categoryRouter.delete("/categories/:id" , authUserVerification , categoryController.deleteCategory);

//! Get a category by ID
categoryRouter.get("/categories/:id" , authUserVerification , categoryController.getCategoryById);

//! Updating the category data
categoryRouter.put(
  "/categories/:id" , authUserVerification , 
  [
    body("category_name")
      .trim()
      .notEmpty()
      .withMessage("the category name is required"),
    body("active")
      .trim()
      .notEmpty()
      .withMessage("the category status is required")
  ],
  categoryController.updateCategory
);

//! Get all categories
categoryRouter.get("/categories" , authUserVerification , categoryController.listingCategories);

//! Search for a category
categoryRouter.get("/category" , authUserVerification , categoryController.searchForCategory);

module.exports = categoryRouter;
