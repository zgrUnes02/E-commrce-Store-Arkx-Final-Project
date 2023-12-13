const cartModel = require("../models/cartModel");

const cartController = {
    //! Show cart
    showCart : async (req , res) => {
        const customer = req.customer ;
        const cart = await cartModel.find({customer_id : customer._id}) ;

        if ( cart ) {
            res.status(200).send(cart) ;
        } 
    } ,

    //! Delete product from cart
    deleteProductFromCart : async (req , res) => {
        const { id } = req.params ;
        try {
            const productDeletedFromCart = await cartModel.findByIdAndDelete(id) ;
            if ( productDeletedFromCart ) {
                res.status(200).send({message : 'The product has been deleted from cart' , id : id}) ;
            }
        }
        catch ( error ) {
            console.log(error) ;
        }
    } ,

    //! Increase the quantity
    increaseQuantity : async (req , res) => {
        const { id } = req.params ;
        try {
            const cartThatWantToIncrementHisProduct = await cartModel.findById(id) ;
            const updateQuantity = await cartModel.findByIdAndUpdate(id , {
                quantity : cartThatWantToIncrementHisProduct.quantity + 1 ,
            } , {new : true}) ;
            res.status(200).send(updateQuantity) ;
        }
        catch ( error ) {
            console.log(error) ;
        }
    }, 

    //! Decrease the quantity
    decreaseQuantity : async (req , res) => {
        const { id } = req.params ;
        try {
            const cartThatWantToIncrementHisProduct = await cartModel.findById(id) ;
            if ( cartThatWantToIncrementHisProduct.quantity >= 2 ) {
                const updateQuantity = await cartModel.findByIdAndUpdate(id , {
                    quantity : cartThatWantToIncrementHisProduct.quantity - 1 ,
                } , {new : true}) ;
                res.status(200).send(updateQuantity) ;
            }
        }
        catch ( error ) {
            console.log(error) ;
        }
    } ,

} ;

module.exports = cartController ;
