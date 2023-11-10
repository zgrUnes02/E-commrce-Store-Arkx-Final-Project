const express = require("express");
const serviceController = require("../controllers/serviceController");
const serviceRouter = express.Router();
const { body } = require("express-validator");
const authUserVerification = require('../middlewares/authUserVerification') ;

//! create a new service
serviceRouter.post(
  "/services" , authUserVerification ,
  [
    body("service_name")
      .trim()
      .notEmpty()
      .withMessage("The service's name is required") ,
    body("service_image")
      .trim()
      .notEmpty()
      .withMessage("The service's image is required"),
    body("subcategory_id")
      .trim()
      .notEmpty()
      .withMessage("The subcategory's name is required"),
    body("category_id")
      .trim()
      .notEmpty()
      .withMessage("The category's name is required"),
    body("company_id")
      .trim()
      .notEmpty()
      .withMessage("The company's name is required"),
    body("short_description")
      .trim()
      .notEmpty()
      .withMessage("The service's short description is required") ,
    body("price")
      .trim()
      .notEmpty()
      .withMessage("The service's price is required")
      .isNumeric()
      .withMessage("please enter a valid price"),
    body("option")
      .trim()
      .notEmpty()
      .withMessage("The options are required") ,
    body("city")
      .trim()
      .notEmpty()
      .withMessage("The city is required") ,
    body("location")
      .trim()
      .notEmpty()
      .withMessage("the location is required")
  ],
  serviceController.addService
);

//! Get all services
serviceRouter.get("/services" , serviceController.listingServices);

//! search for a product
serviceRouter.get("/service" , serviceController.searchForService);

//! find a service by id
serviceRouter.get("/services/:id" , authUserVerification , serviceController.getServiceById);

//! update a service
serviceRouter.put("/services/:id" , authUserVerification , serviceController.updateService);

//! delete a service
serviceRouter.delete("/services/:id" , authUserVerification , serviceController.deleteService);

module.exports = serviceRouter;
