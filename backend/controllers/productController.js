const productModel = require("../models/productModel");
const { validationResult } = require("express-validator");

const productController = {

    //! Create new product
    addProduct : async (req, res) => {
        const {
            product_image,
            product_name,
            subcategory_id,
            short_description,
            long_description,
            price,
            discount_price,
            options,
        } = req.body;

        //* Check is there is any validation problem
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors);
        }

        //* adding a new product
        try {
            const newProduct = await productModel.create({
                sku: `sku${Math.floor(Math.random() * 100000000)}`,
                product_image: product_image,
                product_name: product_name,
                subcategory_id: subcategory_id,
                short_description: short_description,
                long_description: long_description,
                price: price,
                discount_price: discount_price,
                options: options,
            });
            res.status(200).json({
                message: "Product added with success",
                product: newProduct,
            });
        } catch (error) {
            console.log(error);
        }
    },

    //! Get all the products list
    listingProducts : async (req , res) => {
        try {
            const products = await productModel.paginate(
                {},
                { page: req.query.page, limit: 5 }
            );
            res.status(200).send(products);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    },

    //! Search for a product
    searchForProduct : async (req , res) => {
        try {
            const products = await productModel.paginate(
                { product_name: req.query.name },
                { name: req.query.name, page: req.query.page, limit: 1 }
            );
            res.status(200).send(products);
        } catch (error) {
            console.log("Something went wrong", error);
        }
    },

    //! Get a product by ID
    getProductById : async (req, res) => {
        const { id } = req.params;
        try {
            const products = await productModel.findOne({ _id: id });
            res.status(200).send(products);
        } catch (error) {
            console.log(error);
        }
    },

    //! update a product
    updateProduct : async (req, res) => {
         const {
            product_name,
            product_image,
            subcategory_id,
            short_description,
            long_description,
            price,
            discount_price,
            options,
            active,
        } = req.body;

        const { id } = req.params;
        try {
            //* find the product to update
            const productToUpdate = await productModel.findOne({ _id: id });

            //* update the product
            await productModel.findByIdAndUpdate(productToUpdate._id , {
                    product_name: product_name,
                    product_image: product_image,
                    subcategory_id: subcategory_id,
                    short_description: short_description,
                    long_description: long_description,
                    price: price,
                    discount_price: discount_price,
                    options: options,
                    active: active,
            });
            res.status(200).json({ message: "The product has been updated with success" });
        } catch ( error ) {
            console.log( error );
        }
    },

    //! delete a product
    deleteProduct : async (req , res) => {
      
        const { id } = req.params;

        try {
            await productModel.findByIdAndDelete(id);
            res.status(200).json({ message: "The product has been deleted with success"});
        } catch ( error ) {
            console.log( error );
        }
    } ,
};

module.exports = productController;
