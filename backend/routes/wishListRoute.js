const express = require('express') ;
const customerVerification = require('../middlewares/customerVerification');
const wishListController = require('../controllers/wishListController');
const wishListRoute = express.Router() ;

wishListRoute.get('/wish-list' , customerVerification , wishListController.showWishList) ;
wishListRoute.post('/wish/list/add/:id' , customerVerification , wishListController.addProductToWishList) ;
wishListRoute.delete('/wish/list/delete/:id' , customerVerification , wishListController.deleteProductFromWishList) ;

module.exports = wishListRoute ;
