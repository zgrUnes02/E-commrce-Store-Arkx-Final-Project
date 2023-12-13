const mongoose = require('mongoose') ;

const schemaWishList = new mongoose.Schema({
    customer_id : {
        type : String ,
        required : [true] ,
    } ,

    product : {
        type: mongoose.Schema.Types.Mixed
    } ,
});

const wishListModel = mongoose.model('wishList' , schemaWishList) ;
module.exports = wishListModel ;
