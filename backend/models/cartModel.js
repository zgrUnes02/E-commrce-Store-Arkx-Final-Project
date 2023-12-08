const mongoose = require('mongoose') ;

const schemaCart = new mongoose.Schema({
    customer_id : {
        type : String ,
        required : [true] ,
    } ,

    product : {
        type: mongoose.Schema.Types.Mixed
    } ,

    quantity : {
        type : Number ,
        default : 1
    }
}) ;

const cartModel = mongoose.model('Cart' , schemaCart) ;
module.exports = cartModel ;
