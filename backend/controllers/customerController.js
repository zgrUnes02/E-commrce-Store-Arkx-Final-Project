const { validationResult } = require("express-validator");
const customerModel = require("../models/customerModel");

const customerController = {

    //* Create a new customer account
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

    //* Get all the customers list
    listingCustomers : async (req , res) => {
        try {
            const customers = await customerModel.paginate({} , { page : req.query.page , limit : 5 }) ;
            res.status(200).send(customers) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,

    //* Search for a customer
    searchForCustomer : async (req , res) => {
        try {
            const customer = await customerModel.paginate({$or : [{first_name : req.query.name} , {last_name : req.query.name}]} , { name : req.query.name , page : req.query.page , limit : 5 }) ;
            res.status(200).send(customer) ;
        }
        catch ( error ) {
            console.log('Something went wrong' , error) ;
        }
    } ,

    //* Get a customer by ID
    getCustomerById : async (req , res) => {
        const { id } = req.params ;
        try {
            const customer = await customerModel.find({_id : id}) ;
            res.status(200).send(customer) ;
        }
        catch ( error ) {
            console.log( error ) ;
        }
    }
} ;

module.exports = customerController ;
