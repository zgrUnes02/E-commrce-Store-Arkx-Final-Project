const jwt = require('jsonwebtoken') ;
const customerModel = require('../models/customerModel');

const customerVerification = async ( req , res , next ) => {

    //! Get token from headers 
    const authorizationHeader = req.headers.authorization;
    if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    const token = authorizationHeader.split(' ')[1];

    if ( token ) {
        const decoded = jwt.verify(token , process.env.JWT_SECRET) ;

        //* Find the user with the email
        const customer = await customerModel.findOne({email : decoded.email}) ;
        if ( customer ) {
            req.customer = customer ;
            next() ;
        }
    } 
    else {
        res.status(403).json({message : 'something went wrong in the customer token'}) ;
    }
}

module.exports = customerVerification ;
