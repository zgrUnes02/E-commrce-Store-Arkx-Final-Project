const categoryController = require("../controllers/categoryController");
const { body } = require("express-validator") ;
const express = require('express')
const categoryRouter = express.Router()

//! Create new category 
categoryRouter.post(
    "/categories",
    [
      body("category_name")
        .trim()
        .notEmpty().withMessage("the category name is required") ,
      body("active")
        .trim()
        .notEmpty().withMessage("the category status is required")
        .isBoolean().withMessage("the category status value is required") ,
    ],
    categoryController.addNewCategory
  );

//   categoryRouter.delete("/categories/:id" , categoryController.deleteCategory) ;

  module.exports = categoryRouter
  