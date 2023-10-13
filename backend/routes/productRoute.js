const express = require("express");
const productController = require("../controllers/productController");
const productRouter = express.Router();
const { body } = require("express-validator");

//! create a new product
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

//! Get all product
productRouter.get("/products", productController.listingProducts);

//! Search for a product
productRouter.get("/product", productController.searchForProduct);

//! Get a product by ID
productRouter.get("/products/:id", productController.getProductById);

//! Update a product
productRouter.put(
  "/product/:id",
  [
    body("product_name")
      .trim()
      .notEmpty()
      .withMessage("the product name is required")
      .isAlpha()
      .withMessage("please enter a valid name"),
    body("product_image")
      .trim()
      .notEmpty()
      .withMessage("An image of the product is required")
      .isArray()
      .withMessage("please put valid images"),
    body("short_description")
      .trim()
      .notEmpty()
      .withMessage("A short description is required"),
    body("long_description")
      .trim()
      .notEmpty()
      .withMessage("A long description is required"),
    body("price")
      .trim()
      .notEmpty()
      .withMessage("the price of the product is required")
      .isNumeric()
      .withMessage("please enter a valid price"),
    body("discount_price")
      .trim()
      .isNumeric()
      .withMessage("please enter a valid price"),
    body("active")
      .trim()
      .notEmpty()
      .withMessage("please choose the product's activation")
      .isBoolean()
      .withMessage("please enter a valid value of the activation's product"),
  ],
  productController.updateProduct
);

//! Delete a product by id
productRouter.delete("/product/:id", productController.deleteProduct);

module.exports = productRouter;
