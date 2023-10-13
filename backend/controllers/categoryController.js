const { validationResult } = require("express-validator") ;
const categoryModel = require("../models/categoryModel") ;

const categoryController={
    //! Create a new category
    addNewCategory : async (req , res) => {
        const { 
            category_name , 
            active , 
        } = req.body ;

    //* Check if there is any validation problem
        const errors = validationResult(req) ;
        if ( !errors.isEmpty() ) {
            return res.status(400).json(errors) ;
        }
        //* Create the new category
        try {
            const newCategory = await categoryModel.create({
                category_name : category_name , 
                active : active ,
            }) ;
            res.status(200).json({
                message : 'Category created with success' ,
                category : newCategory , 
            }) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,
    //! Delete the category profile
    deleteCategory : async (req , res) => {
        const { id } = req.params ;
        try {
            await categoryModel.findByIdAndDelete(id) ;
            res.status(200).json({message : 'The category has been deleted with success'}) ;        
        }
        catch ( error ) {
            console.log( error ) ;
        }
    },
        //! Get a category by ID
    getCategoryById : async (req , res) => {
        const { id } = req.params ;
        try {
            const category = await categoryModel.findOne({_id : id}) ;
            res.status(200).send(category) ;
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,
    // ! Updating the category's data 
    updateCategory : async (req , res) => {
        const { category_name , active } = req.body ;
        const { id } = req.params ;
        try {
            //* Find the category that i want to update his data
            const categoryWantToUpdate = await categoryModel.findOne({_id : id}) ;
            //* Then update the category
            await categoryModel.findByIdAndUpdate(categoryWantToUpdate._id , {
                category_name : category_name ,
                active : active ,
            }) ;
            res.status(200).json({message : 'The category data has been updated with success'}) ;
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,
        // //! Get all the categories list
    listingCategories : async (req , res) => {
        try {
            //* Paginate the categories
            const categories = await categoryModel.paginate(
                {} , 
                { page : req.query.page , limit : 5 }
            ) ;
            res.status(200).send(categories) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,
        // //! Search for a category
    searchForCategory : async (req , res) => {
        try {
            const category = await categoryModel.paginate(
                {category_name : req.query.name} ,
                { name : req.query.name , page : req.query.page , limit : 5 }
            ) ;
            res.status(200).send(category) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,
    
}

module.exports = categoryController ;

    

    // //! Get all the categories list
    // listingCategories : async (req , res) => {
    //     try {
    //         //* Paginate the categories
    //         const categories = await categoryModel.paginate(
    //             {} , 
    //             { page : req.query.page , limit : 5 }
    //         ) ;
    //         res.status(200).send(categories) ;
    //     }
    //     catch ( error ) {
    //         console.log('Something went wrong' , error) ;
    //     }
    // } ,

    // //! Search for a category
    // searchForCategory : async (req , res) => {
    //     try {
    //         const category = await categoryModel.paginate(
    //             {$or : [{first_name : req.query.name} , {last_name : req.query.name}]} ,
    //             { name : req.query.name , page : req.query.page , limit : 5 }
    //         ) ;
    //         res.status(200).send(category) ;
    //     }
    //     catch ( error ) {
    //         console.log('Something went wrong' , error) ;
    //     }
    // } ,
    // //! Get a category by ID
    // getCategoryById : async (req , res) => {
    //     const { id } = req.params ;
    //     try {
    //         const category = await categoryModel.find({_id : id}) ;
    //         res.status(200).send(customer) ;
    //     }
    //     catch ( error ) {
    //         console.log( error ) ;
    //     }
    // } ,
    // //! Updating the category's data 
    // updateCategory : async (req , res) => {
    //     const { category_name , active } = req.body ;
    //     const { id } = req.params ;
    //     try {
    //         //* Find the customer that i want to update his data
    //         const categoryWantToUpdate = await categoryModel.findOne({_id : id}) ;
    //         //* Then update his data
    //         const category = await categoryModel.findByIdAndUpdate(categoryWantToUpdate._id , {
    //             category_name : category_name ,
    //             active : active ,
    //         }) ;
    //         res.status(200).json({message : 'The category data has been updated with success'}) ;
    //     }
    //     catch ( error ) {
    //         console.log( error ) ;
    //     }
    // } ,
    //  //! Delete the category's data
    //  router.delete(`/category/:id/delete`, async (req, res) => {
    //     try {
    //       if (!req.params.id) res.send("missing id");
    //       else {
        
    //         await Product.remove({ category: req.params.id });
        
    //         res.send("category deleted");
    //       }
    //      }
    //       } catch (error) {
    //          res.status(400).json({ error: error.message });
    //       }
    //     );