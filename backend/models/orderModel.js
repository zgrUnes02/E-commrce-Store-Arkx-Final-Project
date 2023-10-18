const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const orderSchema = new mongoose.Schema({

  customer_id: {
    type : mongoose.Schema.Types.ObjectId , 
    ref: 'customer' ,
    required: [true, 'Customer ID is missing'],
  },

  company_id: {
    type : mongoose.Schema.Types.ObjectId , 
    ref: 'company' ,
    required: [true, 'Company ID is missing'],
  },

  order_items: {
    type: Array ,
    required: [true, 'Order items are missing'],
  },

  cart_total_price: {
    type: Number,
    required: [true, 'Cart total price is missing'],
  },

  status: {
    type: String,
    enum: ['open', 'shipped', 'paid', 'closed', 'canceled'],
    required: [true, 'Order status is missing'],
  },

  type : {
    type : String ,
    enum : ['product' , 'service'] ,
    required : [true , 'the product type is required'] ,
  }

}, { timestamps: true });

orderSchema.plugin(mongoosePaginate) ;
const orderModel = mongoose.model('order', orderSchema) ;
module.exports = orderModel ;
