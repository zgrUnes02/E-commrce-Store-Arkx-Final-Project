const { validationResult } = require("express-validator");
const orderModel = require("../models/orderModel");
const cartModel = require('../models/cartModel') ;

const orderController = {
  //! Create a new order
  addNewOrder : async (req, res) => {
    const customer = req.customer ;
    //* Create the new order
    try {
      const productsForOrder = await cartModel.find({customer_id : customer._id}) ;
      const newOrder = await orderModel.create({
        customer_id : customer._id ,
        order_items : productsForOrder ,
        cart_total_price : 10000 ,
        status : 'opened' ,
        type : 'product' ,
      }) ;

      await cartModel.deleteMany({customer_id : customer._id}) ;

      if ( newOrder ) {
        res.status(200).send({message : 'The order has been placed with success !'}) ;
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },

  //! Create new service order
  addNewServiceOrder : async (req , res) => {
    const customer = req.customer ;
    try {
      const newOrder = await orderModel.create({
        customer_id : customer._id ,
        order_items : req.body ,
        cart_total_price : 10000 ,
        status : 'opened' ,
        type : 'service' ,
      }) ;

      if ( newOrder ) {
        res.status(200).send({message : 'The order has been placed with success !'}) ;
      }
    } catch (error) {
      console.log("Something went wrong", error);
    }
  } ,

  //! List all orders
  listOrders: async (req, res) => {
    try {
      //* Here are my option that i will use to paginate
      var options = {
        sort : { created_at: -1 } ,
        lean : true ,
        populate : ['customer_id'] ,
        page : req.query.page  ,
        limit : 100 ,
      };

      //* Paginate with populate
      const orders = await orderModel.paginate({} , options) ;      
      
      //* Send all subcategories with the name of the category
      if ( orders ) {
        res.status(200).json(orders);
      }
      
    } 
    catch ( error ) {
      res.status(403).json({
        message : 'Something went wrong' ,
        error : error ,
      });
    }
  },

  //! Get an order by ID
  getOrderById: async (req, res) => {

    const { id } = req.params ;

    try {
      const order = await orderModel.findOne({ customer_id : id });

      if (order) {
        res.status(200).json(order);
      }
      else {
        res.status(403).send('order not exists')
      }
    } 
    catch (error) {
      res.status(500).json(error);
    }
  },

  //! Update the order status
  updateOrderStatus: async (req, res) => {

    //* Check if there is any validation problem
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    try {
      const { id } = req.params ;
      const order = await orderModel.findOne({_id:id});

      const updatedOrder = await orderModel.findByIdAndUpdate(
        id ,
        {
          customer_id : order.customer_id,
          company_id : order.company_id, 
          order_items : order.order_items,
          cart_total_price : order.cart_total_price,
          status : req.body.status,
          type : order.type,
        },
      );

      if (updatedOrder) {
        return res.status(200).json({
          message : "order updated with success" ,
        });
      } 
    } 
    catch (error) {
      res.status(500).json(error);
    }
  },

};

module.exports = orderController;
