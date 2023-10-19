const { validationResult } = require("express-validator");
const orderModel = require("../models/orderModel");

const orderController = {
  //! Create a new order
  addNewOrder: async (req, res) => {
    const { customer_id, company_id, order_items, cart_total_price, status, type } = req.body ;

    //! Check if there is any validation problem
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json(errors);
    }

    //* Create the new order
    try {
      const newOrder = await orderModel.create({
        customer_id: customer_id,
        company_id: company_id,
        order_items: order_items,
        cart_total_price: cart_total_price,
        status: status,
        type: type ,
      });
      res.status(200).json({
        message: "Order created with success",
        order: newOrder,
      });
    } catch (error) {
      console.log("Something went wrong", error);
    }
  },

  //! List all orders
  listOrders: async (req, res) => {
    try {
      //* Here are my option that i will use to paginate
      var options = {
        sort : { created_at: -1 } ,
        lean : true ,
        populate : ['company_id' , 'customer_id'] ,
        page : req.query.page  ,
        limit : 10 ,
      };

      //* Paginate with populate
      const orders = await orderModel.paginate({} , options) ;
      // const orders = await orderModel.find() ;
      
      
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

    const {id} = req.params

    try {
      const order = await orderModel.findOne({_id:id});
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
