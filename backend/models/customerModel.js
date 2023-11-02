const mongoose = require('mongoose') ;
const mongoosePagination = require('mongoose-paginate-v2') ;

const customerSchema = new mongoose.Schema({
    first_name : {
        type : String ,
        required : [true , 'the first name is required'] ,
    } ,

    last_name : {
        type : String ,
        required : [true , 'the last name is required'] ,
    } ,

    email : {
        type : String ,
        unique : true ,
        required : [true , 'the email is required'] ,
    } ,

    password : {
        type : String , 
        required : [true , 'the password is required'] ,
    } ,

    last_login : {
        type : Date ,
    } ,

    valid_account : {
        type : Boolean ,
        default : false ,
    } ,

    active : {
        type : Boolean ,
        default : true ,
    }

} , { timestamps : true }) ;

customerSchema.plugin(mongoosePagination) ;
const customerModel = mongoose.model('Customer' , customerSchema) ;
module.exports = customerModel ;
