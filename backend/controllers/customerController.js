const { validationResult } = require("express-validator") ;
const customerModel = require("../models/customerModel") ;
const bcrypt = require('bcryptjs') ;
const jwt = require('jsonwebtoken') ;
const dotenv = require('dotenv').config();
const jwt_secret = process.env.JWT_SECRET ;

const customerController = {

    //! Customer authentication
    authenticateUser : async (req , res) => {
        const { email , password } = req.body ;

        //* Check is there is any validation problem
        const errors = validationResult(req) ; 
        if ( !errors.isEmpty() ) { 
            return res.status(400).json(errors) ;
        }

        try {
            const customer = await customerModel.findOne({email : email}) ;

            //* Check is there is any customer with this email
            if ( customer ) {

                //* Check if the password that came from input equal to the password that exists in database
                const comparePasswords = await bcrypt.compare(password , customer.password) ;

                if ( comparePasswords ) {

                    //* Generate the token
                    const token = jwt.sign({email : email} , jwt_secret) ;
                    if ( token ) {
                        res.status(200).json({
                            customer : customer ,
                            token : token
                        }) ;
                    }
                    else {
                        res.status(401).json({message : 'something went wrong with the token'})
                    }
                } 
                else {
                    res.status(401).json({message : 'the password is not correct'}) ;
                }
            }
            else {
                res.status(400).json({message : 'there is no account with this email'}) ;
            } 
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,

    //! Create a new customer account
    customerRegister : async (req , res) => {
        const { 
            first_name , 
            last_name , 
            email , 
            password 
        } = req.body ;

        //* Check is there is any validation problem
        const errors = validationResult(req) ;
        if ( !errors.isEmpty() ) {
            return res.status(400).json(errors) ;
        }

        //* Check if customer already has an account
        const customer = await customerModel.findOne({email : email}) ;
        if ( customer ) {
            return res.status(400).json({message : 'The email is already exists'}) ;
        }

        //* Hashing the password
        const salt = await bcrypt.genSalt(10) ;
        const hashedPassword = await bcrypt.hash(password , salt) ;

        //* Create the new customer
        try {
            const newCustomer = await customerModel.create({
                first_name : first_name , 
                last_name : last_name ,
                email : email , 
                password : hashedPassword ,
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

    //! Get all the customers list
    listingCustomers : async (req , res) => {
        try {
            //* Paginate the customers
            const customers = await customerModel.paginate(
                {} , 
                { page : req.query.page , limit : 5 }
            ) ;
            res.status(200).send(customers) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,

    //! Search for a customer
    searchForCustomer : async (req , res) => {
        try {
            const customer = await customerModel.paginate(
                { $or : [{first_name : {$regex : req.query.name}} , {last_name : {$regex : req.query.name}}] } ,
                { name : req.query.name , page : req.query.page , limit : 5 }
            ) ;
            res.status(200).send(customer) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,

    //! Get a customer by ID
    getCustomerById : async (req , res) => {
        const { id } = req.params ;
        try {
            const customer = await customerModel.find({_id : id}) ;
            res.status(200).send(customer) ;
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,

    //! Validate the customer's account 
    validateAndInvalidateCustomerAccount : async (req , res) => {
        const { id } = req.params ;
        try {
            const customer = await customerModel.findOne({_id : id}) ;
            //* Make the account invalid
            if ( customer.valid_account == true ) {
                await customerModel.findByIdAndUpdate(id , {valid_account : false})
                res.status(200).json({message : 'The account is invalid now'})
            }
            //* Make the account valid
            else {
                await customerModel.findByIdAndUpdate(id , {valid_account : true}) ;
                res.status(200).json({message : 'The account is valid now'})
            }
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,

    //! Updating the customer's data 
    updateCustomer : async (req , res) => {
        const { first_name , last_name , email , valid_account , active } = req.body ;
        const { id } = req.params ;
        try {
            //* Find the customer that i want to update his data
            const customerWantToUpdate = await customerModel.findOne({_id : id}) ;
            //* Then update his data
            const customer = await customerModel.findByIdAndUpdate(customerWantToUpdate._id , {
                first_name : first_name ,
                last_name : last_name ,
                email : email ,
                password : customerWantToUpdate.password , 
                active : active ,
            }) ;
            res.status(200).json({message : 'The customer data has been updated with success'}) ;   
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,

    //! Delete the customer's profile
    deleteCustomer : async (req , res) => {
        const { id } = req.params ;
        try {
            await customerModel.findByIdAndDelete(id) ;
            res.status(200).json({message : 'The customer has been deleted with success'}) ;        
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } 
} 

module.exports = customerController ;
