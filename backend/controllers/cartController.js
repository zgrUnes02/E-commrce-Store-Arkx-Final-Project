const cartModel = require("../models/cartModel");

const cartController = {
    //! Show cart
    showCart : async (req , res) => {
        const customer = req.customer ;
        const cart = await cartModel.find({customer_id : customer._id}) ;

        if ( cart ) {
            res.status(200).send(cart) ;
        } 
    }

} ;

module.exports = cartController ;
