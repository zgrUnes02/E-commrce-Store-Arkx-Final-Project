const mongoose = require('mongoose') ;

const schemaCart = new mongoose.Schema({
    customer_id : {
        type : String ,
        required : [true] ,
    } ,

    product : {
        type: mongoose.Schema.Types.Mixed
    }
}) ;

const cartModel = mongoose.model('Cart' , schemaCart) ;
module.exports = cartModel ;
