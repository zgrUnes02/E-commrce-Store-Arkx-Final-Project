const jwt = require('jsonwebtoken') ;
const customerModel = require('../models/customerModel');

const customerVerification = async ( req , res , next ) => {
    const token = req.headers.authorization.split(' ')[1] ;
    if ( token ) {
        const decoded = jwt.verify(token , process.env.JWT_SECRET) ;

        //* Find the user with the email
        const user = await customerModel.findOne({email : decoded.email}) ;
        if ( user ) {
            req.user = user ;
            next() ;
        }
    } 
    else {
        res.status(403).json({message : 'something went wrong in the customer token'}) ;
    }
}

module.exports = customerVerification ;
