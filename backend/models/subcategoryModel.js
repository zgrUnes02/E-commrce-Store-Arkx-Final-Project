const mongoose = require('mongoose') ;
const mongoosePagination = require('mongoose-paginate-v2') ;

const subcategorySchema = new mongoose.Schema({
    subcategory_name : {
        type : String ,
        required : [true , 'the subcategory name is required'] ,
    } ,
    category_id : {
        type : mongoose.Schema.Types.ObjectId , 
        ref: 'category' ,
        required : [true , 'the category name is required'] ,
    } ,
    active : {
        type : Boolean ,
        required : [true , 'the active status values is required'] ,
    } ,
})

subcategorySchema.plugin(mongoosePagination) ;
const subcategoryModel = mongoose.model('subcategory' , subcategorySchema) ;
module.exports = subcategoryModel ;
