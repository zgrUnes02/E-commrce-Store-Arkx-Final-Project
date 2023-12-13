const { body } = require("express-validator");
const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();
const authUserVerification = require('../middlewares/authUserVerification') ;
const customerVerification = require('../middlewares/customerVerification') ;

//! Create new order
orderRouter.post("/new/order" , customerVerification , orderController.addNewOrder);

//! Create new service order
orderRouter.post("/new/service/order" , customerVerification , orderController.addNewServiceOrder);

//! Get an order by ID
orderRouter.get("/orders/:id" , orderController.getOrderById);

//! Update the order status
orderRouter.put(
  "/order/:id",
  [
    body("status")
      .notEmpty()
      .withMessage("order status required")
      .isIn(['open', 'shipped', 'paid', 'closed', 'canceled'])
      .withMessage("status value not matched")
  ],
  orderController.updateOrderStatus
);

//! List all orders
orderRouter.get("/orders" , authUserVerification , orderController.listOrders);

module.exports = orderRouter;
