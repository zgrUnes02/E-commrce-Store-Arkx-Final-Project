const express = require('express') ;
const companyController = require('../controllers/companyController');
const companyRouter = express.Router() ;
const { body } = require('express-validator') ;
const authUserVerification = require('../middlewares/authUserVerification') ;

//! Create a new company ( Register )
companyRouter.post(
"/companies" , authUserVerification ,
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
companyRouter.get("/companies" , authUserVerification , companyController.getAllCompanies) ;

//! Update a company data
companyRouter.put(
  "/company/:id" , authUserVerification ,
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
companyRouter.delete("/companies/:id" , authUserVerification , companyController.deleteCompany) ;

module.exports = companyRouter ;
