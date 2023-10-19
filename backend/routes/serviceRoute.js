const express = require("express");
const serviceController = require("../controllers/serviceController");
const serviceRouter = express.Router();
const { body } = require("express-validator");

//! create a new service
serviceRouter.post(
  "/services",
  [
    body("service_name")
      .trim()
      .notEmpty()
      .withMessage("The service name is required") ,
    body("service_image")
      .trim()
      .notEmpty()
      .withMessage("The image of the service is required"),
    body("subcategory_id")
      .trim()
      .notEmpty()
      .withMessage("A subcategory id is required"),
    body("category_id")
      .trim()
      .notEmpty()
      .withMessage("A category id is required"),
    body("company_id")
      .trim()
      .notEmpty()
      .withMessage("the id of the company is required"),
    body("short_description")
      .trim()
      .notEmpty()
      .withMessage("A short description of the service is required")
      .isString()
      .withMessage("please enter a valid description"),
    body("price")
      .trim()
      .notEmpty()
      .withMessage("The price of the service is required")
      .isNumeric()
      .withMessage("please enter a valid price"),
    body("options")
      .trim()
      .notEmpty()
      .withMessage("the options are required")
  ],
  serviceController.addService
);

//! Get all services
serviceRouter.get("/services", serviceController.listingServices);

//! search for a product
serviceRouter.get("/service", serviceController.searchForService);

//! find a service by id
serviceRouter.get("/services/:id", serviceController.getServiceById);

//! update a service
serviceRouter.put("/services/:id", serviceController.updateService);

//! delete a service
serviceRouter.delete("/services/:id", serviceController.deleteService);

module.exports = serviceRouter;
