const express = require('express') ;
const cartController = require('../controllers/cartController');
const customerVerification = require('../middlewares/customerVerification');
const cartRouter = express.Router();

cartRouter.get('/cart' , customerVerification , cartController.showCart) ;
cartRouter.delete('/cart/delete/:id' , customerVerification , cartController.deleteProductFromCart) ;

module.exports = cartRouter ;
