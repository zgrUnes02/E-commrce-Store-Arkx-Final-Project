const { validationResult } = require("express-validator");
const customerModel = require("../models/customerModel");

const customerController = {

    //* Function for creating new customer 
    register : async (req , res) => {
        const { first_name , last_name , email , password } = req.body ;

        //* Check is there is any validation problem
        const errors = validationResult(req) ;
        if ( !errors.isEmpty() ) {
            return res.status(400).json(errors) ;
        }

        //* Create the new customer
        try {
            const newCustomer = await customerModel.create({
                first_name : first_name , 
                last_name : last_name ,
                email : email , 
                password : password ,
            }) ;
            res.status(200).json({
                message : 'Customer create with success' ,
                customer : newCustomer , 
            }) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,

    //* Function for login a customer 
} ;

module.exports = customerController ;
