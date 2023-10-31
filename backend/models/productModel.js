const mongoose = require("mongoose");
const mongoosePagination = require("mongoose-paginate-v2");

const productSchema = new mongoose.Schema({
  sku: {
    type: String ,
    unique: true ,
  } ,

  product_image: {
    type: Array ,
    required: true ,
  } ,

  product_name: {
    type: String ,
    required: true ,
  } ,

  subcategory_id: {
    type: mongoose.Schema.Types.ObjectId ,
    ref : 'Subcategory' ,
    required: true ,
  } ,

  short_description: {
    type: String ,
    required: true ,
  } ,

  long_description: {
    type: String ,
    required: true ,
  } ,

  price: {
    type: Number ,
    required: true ,
  } ,

  discount_price: {
    type: Number ,
  } ,

  options: {
    type: Array ,
    required: true ,
  } ,

  active: {
    type: Boolean ,
  } ,

});

productSchema.plugin(mongoosePagination);
const productModel = mongoose.model("Product" , productSchema);
module.exports = productModel;
