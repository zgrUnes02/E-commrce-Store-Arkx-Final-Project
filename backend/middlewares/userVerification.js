const jwt = require('jsonwebtoken');
const userModel = require('../models/userModel')

const userVerification = async (req, res, next) => {
    try{ 
        const token = req.headers.authorization.split(' ')[1]

        if ( token ){
            const verifyToken = jwt.verify(token, process.env.JWT_SECRET );
            const user = await userModel.findOne({_id:verifyToken.id});
            req.user = user;
            next();
        }
        else{
            res.status(400).json(error);
        }
    }
    catch ( error ) {
        console.log(error);
    }
}

module.exports = userVerification;
