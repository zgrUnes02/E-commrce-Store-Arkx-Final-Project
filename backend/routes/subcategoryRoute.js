const express = require('express') ;
const subcategoryController = require('../controllers/subcategoryController');
const subcategoryRouter = express.Router() ;
const { body } = require('express-validator') ;
const authUserVerification = require('../middlewares/authUserVerification') ;

//! Create a new subcategory 
subcategoryRouter.post(
  "/subcategories" , authUserVerification , 
  [
    body("subcategory_name")
      .trim()
      .notEmpty().withMessage("the subcategory name is required"),
    body("category_id")
      .trim()
      .notEmpty().withMessage('the category is required') ,
    body("active")
      .trim()
      .notEmpty().withMessage('the activation status value is required')
      .isBoolean().withMessage('the activation status value should be boolean') ,
  ],
  subcategoryController.createSubcategory
);

//! List all the subcategories 
subcategoryRouter.get('/subcategories' , authUserVerification , subcategoryController.getAllSubcategories) ;

//! Get a subcategory by ID
subcategoryRouter.get('/subcategories/:id' , authUserVerification , subcategoryController.getSubcategoryById) ;

//! Search for subcategories
subcategoryRouter.get('/subcategory' , subcategoryController.searchForSubcategories) ;

//! Update the subcategory data
subcategoryRouter.put(
  '/subcategories/:id' , authUserVerification , 
  [
    body("subcategory_name")
      .trim()
      .notEmpty().withMessage("the subcategory name is required"),
    body("category_id")
      .trim()
      .notEmpty().withMessage('the category is required') ,
    body("active")
      .trim()
      .notEmpty().withMessage('the activation status value is required')
      .isBoolean().withMessage('the activation status value should be boolean') ,
  ] , 
  subcategoryController.updateSubcategory
) ;

//! Delete a subcategory
subcategoryRouter.delete('/subcategories/:id' , authUserVerification , subcategoryController.deleteSubcategory) ;

module.exports = subcategoryRouter ;
