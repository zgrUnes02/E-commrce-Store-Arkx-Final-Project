const express = require('express') ;
const customerController = require('../controllers/customerController.js');
const customerRouter = express.Router() ;
const { body } = require('express-validator') ;

//* Create new customer ( Register )
customerRouter.post('/v1/customers', [
    body('first_name').trim().notEmpty().withMessage('the first name is required').isAlpha().withMessage('please enter a valid first name') ,
    body('last_name').trim().notEmpty().withMessage('the last name is required').isAlpha().withMessage('please enter a valid last name') ,
    body('email').trim().notEmpty().withMessage('the email is required').isEmail().withMessage('please enter a valid email') ,
    body('password').trim().notEmpty().withMessage('the password is required') ,
] , customerController.register) ;

module.exports = customerRouter ;
