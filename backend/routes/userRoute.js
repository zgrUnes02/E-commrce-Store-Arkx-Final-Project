const express = require("express");
const userRouter = express.Router();
const userController = require('../controllers/userController');
const { body } = require("express-validator");
const authUserVerification = require("../middlewares/authUserVerification");

//! Create new user ( Register )
userRouter.post("/users" ,
  [
    body("first_name")
      .trim()
      .notEmpty()
      .withMessage("the first name is required")
      .isAlpha()
      .withMessage("please enter a valid first name"),
    body("last_name")
      .trim()
      .notEmpty()
      .withMessage("the last name is required")
      .isAlpha()
      .withMessage("please enter a valid last name"),
    body("user_name")
      .trim()
      .notEmpty()
      .withMessage("the username is required")
      .isAlpha()
      .withMessage("please enter a valid username"),
    body("role")
      .trim()
      .notEmpty()
      .withMessage("the role is required")
      .isIn(['admin', 'manager']),
      body("email")
      .trim()
      .notEmpty()
      .withMessage("the email is required")
      .isEmail()
      .withMessage("please enter a valid email"),
    body("password").trim().notEmpty().withMessage("the password is required"),
  ], 
  userController.register) ;

//! login
userRouter.post(
  "/users/login" ,
  [
    body("email")
      .trim()
      .notEmpty()
      .withMessage("the email is required")
      .isEmail()
      .withMessage("please enter a valid email"),
    body("password")
      .trim()
      .notEmpty()
      .withMessage("the password is required"),
  ],
  userController.login
) ;

//! Get all users
userRouter.get("/users" , authUserVerification , userController.listingUsers) ;

//! Search for a user
userRouter.get("/user" , authUserVerification , userController.searchForUser) ;

//! Get a user by ID
userRouter.get("/users/:id" , authUserVerification , userController.getUserById) ;

//! Get a user profile
userRouter.get("/user/profile" , authUserVerification , userController.userProfile) ;

//! Update profile information
userRouter.put('/user/profile/update/information'
 , authUserVerification , 
 [
  body("first_name")
      .trim()
      .notEmpty()
      .withMessage("the first name is required")
      .isAlpha()
      .withMessage("please enter a valid first name"),
  body("last_name")
    .trim()
    .notEmpty()
    .withMessage("the last name is required")
    .isAlpha()
    .withMessage("please enter a valid last name"),
  body("user_name")
    .trim()
    .notEmpty()
    .withMessage("the username is required") ,
  body("email")
    .trim()
    .notEmpty()
    .withMessage("the email is required")
    .isEmail()
    .withMessage("please enter a valid email"),
 ] ,
 userController.updateProfileInfo) ;

//! Update the user's data 
userRouter.put('/users/:id' , authUserVerification , userController.updateUser) ;

//! Block or unblock an user
userRouter.put('/users/block-unblock/:id' , authUserVerification , userController.blockOrUnblock) ;

//! Deleting a user
userRouter.delete('/users/:id' , authUserVerification , userController.deleteUser) ;

module.exports = userRouter ;
