const express = require('express') ;
const customerController = require('../controllers/customerController.js');
const customerRouter = express.Router() ;

customerRouter.get('/v1/customers', customerController.register) ;

module.exports = customerRouter ;
