const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();
const { body } = require("express-validator");

productRouter.post(
  "/products",
  [
    body("product_name")
      .trim()
      .notEmpty()
      .withMessage("The product name is required")
      .isAlpha()
      .withMessage("please enter a valid product name"),
    body("product_image")
      .trim()
      .notEmpty()
      .withMessage("The image of the product is required")
      .isArray()
      .withMessage("please enter valid images"),
    body("subcategory_id")
      .trim()
      .notEmpty()
      .withMessage("A subcategory id is required"),
    body("short_description")
      .trim()
      .notEmpty()
      .withMessage("A short description of the product is required")
      .isString()
      .withMessage("please enter a valid description"),
    body("long_description")
      .trim()
      .notEmpty()
      .withMessage("A long description of the product is required")
      .isString()
      .withMessage("please enter a valid description"),
    body("price")
      .trim()
      .notEmpty()
      .withMessage("The price of the product is required")
      .isNumeric()
      .withMessage("please enter a valid price"),
    body("options")
      .trim()
      .notEmpty()
      .withMessage("the options are required")
      .isArray()
      .withMessage("please enter a valid option"),
  ],
  productController.addProduct
);

//* Get all product
productRouter.get('/products' , productController.listingProducts) ;

//* Search for a product
productRouter.get('/product' , productController.searchForProduct) ;

//* Get a product by ID
productRouter.get('/products/:id' , productController.getProductById) ;


  module.exports = productRouter;
