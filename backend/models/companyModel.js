const mongoose = require('mongoose') ;

const schemaCompany = new mongoose.Schema({
    companyName : {
        type : String ,
        required : [true , 'the company name is required'] ,
    } ,

    description : {
        type : String ,
        required : [true , 'the description is required'] ,
    } ,

    logo : {
        type : String ,
    } ,

    email : {
        type : String ,
        required : [true , 'the email is required'] ,
    } ,

    password : {
        type : String ,
        required : [true , 'the password is required'] ,
    }
}) ;

const companyModel = mongoose.model('company' , schemaCompany) ;
module.exports = companyModel ;
