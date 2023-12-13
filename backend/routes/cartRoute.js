const express = require('express') ;
const cartController = require('../controllers/cartController');
const customerVerification = require('../middlewares/customerVerification');
const cartRouter = express.Router();

//! Show all products exist in cart
cartRouter.get('/cart' , customerVerification , cartController.showCart) ;

//! Delete product from cart
cartRouter.delete('/cart/delete/:id' , customerVerification , cartController.deleteProductFromCart) ;

//! Increase the quantity for a product that exists in cart
cartRouter.post('/cart/increase/:id' , customerVerification , cartController.increaseQuantity) ;

//! Decrease the quantity for a product that exists in cart
cartRouter.post('/cart/decrease/:id' , customerVerification , cartController.decreaseQuantity) ;

module.exports = cartRouter ;
