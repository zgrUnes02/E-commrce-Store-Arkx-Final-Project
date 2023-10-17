const { body } = require("express-validator");
const express = require("express");
const orderController = require("../controllers/orderController");
const orderRouter = express.Router();

//! Create new order
orderRouter.post(
  "/orders",
  [
    body("customer_id")
      .trim()
      .notEmpty()
      .withMessage("Customer ID is required"),
    body("company_id").trim().notEmpty().withMessage("Company ID is required"),
    body("order_items").notEmpty().withMessage("Order items is required"),
    body("cart_total_price")
      .isNumeric()
      .withMessage("Cart total price must be a number"),
    body("status")
      .trim()
      .isIn(["Open", "Shipped", "Paid", "Closed", "Canceled"])
      .withMessage("Invalid order status"),
  ],
  orderController.addNewOrder
);

//! Get an order by ID
orderRouter.get("/orders/:id", orderController.getOrderById);

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
orderRouter.get("/orders", orderController.listOrders);

module.exports = orderRouter;
