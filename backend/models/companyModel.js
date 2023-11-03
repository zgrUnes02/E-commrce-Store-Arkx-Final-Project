const mongoose = require('mongoose') ;
const mongoosePagination = require('mongoose-paginate-v2') ;

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

    city : {
        type : String ,
        required : [true , 'the city is required'] ,
    } ,

    location : {
        type : String ,
        required : [true , 'the company\'s location is required'] ,
    }
}) ;

schemaCompany.plugin(mongoosePagination) ;
const companyModel = mongoose.model('Company' , schemaCompany) ;
module.exports = companyModel ;
