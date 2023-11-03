const express = require('express') ;
const companyController = require('../controllers/companyController');
const companyRouter = express.Router() ;
const { body } = require('express-validator') ;
const companyVerification = require('../middlewares/companyVerification');

//! Create a new company ( Register )
companyRouter.post(
"/companies" ,
  [
    body("companyName")
      .trim()
      .notEmpty()
      .withMessage("the company name is required"),
    body('description')
      .trim()
      .notEmpty().withMessage('the description is required') ,
    body('email')
      .trim()
      .notEmpty().withMessage('the email is required')
      .isEmail().withMessage('enter a valid email') ,
    body('city')
      .trim()
      .notEmpty().withMessage('the city is required'),
    body('location')
      .trim()
      .notEmpty().withMessage('the location is required'),
    body('logo')
      .trim()
      .notEmpty().withMessage('the logo is required') ,
  ] ,
  companyController.registerCompany
);

//! Authenticate a company ( Login )
companyRouter.post(
  "/company-login" ,
  [
    body("email")
      .trim()
      .notEmpty().withMessage("the email is required")
      .isEmail().withMessage('enter a valid email') ,
    body("password")
      .trim()
      .notEmpty().withMessage("the password is required"),
  ] ,
  companyController.loginCompany
);

//! Get All companies 
companyRouter.get("/companies" , companyController.getAllCompanies) ;

//! Update a company data
companyRouter.put(
  "/company/:id" , companyVerification ,
  [
    body("companyName")
      .trim()
      .notEmpty()
      .withMessage("the company name is required"),
    body("description")
      .trim()
      .notEmpty()
      .withMessage("the description is required"),
    body("email")
      .trim()
      .notEmpty()
      .withMessage("the email is required")
      .isEmail()
      .withMessage("enter a valid email"),
    body("logo")
      .trim()
      .notEmpty()
      .withMessage("the logo is required"),
    body("city")
      .trim()
      .notEmpty()
      .withMessage("the city is required"),
    body("location")
      .trim()
      .notEmpty()
      .withMessage("the location is required"),
  ] ,
  companyController.updateCompanyData
);

//! Delete a company
companyRouter.delete("/companies/:id" , companyController.deleteCompany) ;

module.exports = companyRouter ;
