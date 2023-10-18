const mongoose = require('mongoose') ;
const mongoosePagination = require('mongoose-paginate-v2') ;

const userSchema = new mongoose.Schema({
    first_name : {
        type : String ,
        required : [true , 'the first name is required'] ,
    } ,

    last_name : {
        type : String ,
        required : [true , 'the last name is required'] ,
    } ,

    user_name : {
        type : String ,
        required : [true , 'the username is required'] ,
        unique : true,
    },

    role : {
        type:String,
        enum:['admin','manager'],
        required : [true , 'the role is required'],
    },

    email : {
        type : String ,
        required : [true , 'the email is required'] ,
    },

    password : {
        type : String , 
        required : [true , 'the password is required'] ,
    },

    last_login : {
        type : Date ,
    },

    active : {
        type : Boolean ,
        default : true ,
    }

 },{timestamps : true}) 
 
 userSchema.plugin(mongoosePagination);
 const userModel = mongoose.model('User', userSchema);
 module.exports = userModel;
