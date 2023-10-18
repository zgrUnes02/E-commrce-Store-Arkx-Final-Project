const companyModel = require("../models/companyModel");
const { validationResult } = require('express-validator') ;
const bcrypt = require('bcryptjs') ;
const jwt = require('jsonwebtoken') ;

const companyController = {

    //! Create a new company ( Register )
    registerCompany : async (req , res) => {
        const { companyName , description , email , password , logo } = req.body ;

        //* Check is there is any validation problem
        const errors = validationResult(req) ; 
        if ( !errors.isEmpty() ) {
            return res.status(400).json(errors) ;
        }

        //* Check is company already exists
        const company = await companyModel.findOne({email : email}) ;
        if ( company ) {
            return res.status(403).json({
                message : 'this email is already registered' ,
            }) ;
        }

        //* Hash the password before insert it 
        const salt = await bcrypt.genSalt(10) ;
        const hashedPassword = await bcrypt.hash(password , salt) ;

        try {
            const company = await companyModel.create({
                companyName : companyName ,
                description : description ,
                email : email ,
                password : hashedPassword ,
                logo : logo ,
            }) ;

            if ( company ) {
                res.status(200).json({
                    message : 'the company has been created with success' ,
                    company : company ,
                }) ;
            }
        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,

    //! Authenticate a company ( Login )
    loginCompany : async (req , res) => {
        const { email , password } = req.body ; 

        //* Check is there is any validation problem
        const errors = validationResult(req) ; 
        if ( !errors.isEmpty() ) {
            return res.status(400).json(errors) ;
        }

        try {
            //* Check if any company registered by this email 
            const company = await companyModel.findOne({email : email}) ;

            if ( company ) {
                //* Check if password correct
                const comparePasswords = await bcrypt.compare(password , company.password) ;

                if ( comparePasswords ) {
                    //* Generate the token
                    const token = jwt.sign({email : email} , process.env.JWT_SECRET) ;

                    if ( token ) {
                        res.status(200).json({
                            message : `welcome back ${company.companyName}` ,
                            token : token ,
                        }) ;
                    }
                }
                else {
                    res.status(200).send('the password is incorrect') ;
                }
            }
            else {
                res.status(404).send('there is no company with this email')
            }

        }
        catch ( error ) {
            console.log( error ) ;
        }
    } ,

    //! Update the company data
    updateCompanyData : async (req , res) => {
        
    }
}

module.exports = companyController ;
