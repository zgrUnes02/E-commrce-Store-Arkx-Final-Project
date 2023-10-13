const mongoose = require('mongoose') ;
const mongoosePagination = require('mongoose-paginate-v2') ;

const categorySchema = new mongoose.Schema({
    category_name : {
        type : String ,
        required : [true , 'Category missing'] ,
    } ,

    active : {
        type : Boolean ,
        required : [true , 'Category missing'] ,
    } ,
} , { timestamps : true });

categorySchema.plugin(mongoosePagination) ;
const categoryModel = mongoose.model('category' , categorySchema) ;
module.exports = categoryModel ;
