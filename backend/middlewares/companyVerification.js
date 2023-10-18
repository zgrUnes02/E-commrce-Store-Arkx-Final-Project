const jwt = require('jsonwebtoken');
const companyModel = require('../models/companyModel');

const companyVerification = async (req, res, next) => {
    try{ 
        const token = req.headers.authorization.split(' ')[1]

        if ( token ){
            const verifyToken = jwt.verify(token, process.env.JWT_SECRET );
            const company = await companyModel.findOne({ _id : verifyToken.id});
            req.company = company;
            next();
        }
        else{
            res.status(400).json(error);
        }
    }
    catch ( error ) {
        res.status(403).json({
            message : 'Something went wrong with the token' ,
            error : error 
        });
    }
}

module.exports = companyVerification ;