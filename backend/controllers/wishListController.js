const wishListModel = require("../models/wishListModel");
const productModel = require("../models/productModel");

const wishListController = {
    //! Show product in the wish list
    showWishList : async (req , res) => {
        const customer = req.customer ;
        const wishListProduct = await wishListModel.find({customer_id : customer._id}) ;
        if ( wishListProduct ) {
            res.status(200).send(wishListProduct) ;
        }
    } ,

    //! Delete product from the wish list
    deleteProductFromWishList : async (req , res) => {
        const { id } = req.params ;
        try {
            const productDeletedFromWishList = await wishListModel.findByIdAndDelete(id) ;
            if ( productDeletedFromWishList ) {
                res.status(200).send({message : 'The product has been deleted from wish list' , id : id}) ;
            }
        }
        catch ( error ) {
            console.log(error) ;
        }
    } ,

    //! Add product to the wish list
    addProductToWishList : async (req , res) => {
        const { id } = req.params ;
        const customer = req.customer ;
        try {
            const product = await productModel.find({_id : id}) ;
            var isProductExistsInWishList = false ;
            
            const searchIfProductExistsInWishList = await wishListModel.find({customer_id : customer._id}) ;
            
            searchIfProductExistsInWishList.map(wishList => {
                if ( wishList.product[0]._id.toString() == id ) {
                    isProductExistsInWishList = true ;
                }
            })

            if ( isProductExistsInWishList == false ) {
                const customerWishList = await wishListModel.create({customer_id : customer._id  , product : product}) ;
                if ( customerWishList ) {
                    res.status(200).send('The product has been added wish success !')
                }
            } else {
                res.status(200).send('The product is already exists in the wish list')
            }
        } 
        catch ( error ) {
            console.log(error) ;
        }
    } ,
} ;

module.exports = wishListController ;
