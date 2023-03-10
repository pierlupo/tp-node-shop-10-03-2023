import express from "express";
import { Shop } from "./classes/app.js";

//An object to manage the shop
const dataservice = new Shop();

//Our object express
const api = express();

//Use of middleware json
api.use(express.json());

/*********Product Endpoints*********/

// Endpoint to add a product
api.post("/products", (req, res) => {
  const { title, price, stock } = req.body;
  if (title != undefined && price != undefined && stock != undefined) {
    dataservice.addProduct(title, price, stock);
    res.json({ message: "product added" });
  } else {
    res.json({ message: "error" });
  }
});

// Endpoint to get products
api.get("/products", (req, res) => {
  res.json(dataservice.products);
});

// Endpoint to get products by id
api.get("/products/:id", (req, res) => {
  const product = dataservice.getProductById(req.params.id);
  if (product != undefined) {
    res.json(todo);
  } else {
    res.json({ message: "Didn't find product" });
  }
});

// Endpoint to update a product
api.put("/products/:id", (req, res) => {
  const { title, price, stock } = req.body;
  if (dataservice.editProduct(req.params.id, title, price, stock)) {
    res.json({ message: "product updated" });
  } else {
    res.json({ message: "error" });
  }
});

// Endpoint to delete a product
api.delete("/products/:id", (req, res) => {
  if (dataservice.deleteProduct(req.params.id)) {
    res.json({ message: "product deleted" });
  } else {
    res.json({ message: "error" });
  }
});

/*********Customer Endpoints*********/

// Endpoint to add a customer
api.post("/customers", (req, res) => {
  const { name, firstname, phone } = req.body;
  if (name != undefined && firstname != undefined && phone != undefined) {
    dataservice.addCustomer(name, firstname, phone);
    res.json({ message: "customer added" });
  } else {
    res.json({ message: "error" });
  }
});

// Endpoint to get customers
api.get("/customers", (req, res) => {
  res.json(dataservice.customers);
});

// Endpoint to get customers by id
api.get("/customers/:id", (req, res) => {
  const customer = dataservice.getProductById(req.params.id);
  if (customer != undefined) {
    res.json(customer);
  } else {
    res.json({ message: "Didn't find customer" });
  }
});

// Endpoint to update a customer
api.put("/customers/:id", (req, res) => {
  const { name, firstname, phone } = req.body;
  if (dataservice.editCustomer(req.params.id, name, firstname, phone)) {
    res.json({ message: "customer updated" });
  } else {
    res.json({ message: "error" });
  }
});

// Endpoint to delete a customer
api.delete("/customers/:id", (req, res) => {
  if (dataservice.deleteCustomer(req.params.id)) {
    res.json({ message: "customer deleted" });
  } else {
    res.json({ message: "error" });
  }
});

/*********Order Endpoints*********/

// Endpoint to add an order
api.post("/orders", (req, res) => {
  const { title, content } = req.body;
  if (title != undefined && content != undefined) {
    dataservice.addOrder(title, content);
    res.json({ message: "order added" });
  } else {
    res.json({ message: "error" });
  }
});

// Endpoint to get orders
api.get("/orders", (req, res) => {
  res.json(dataservice.orders);
});

// Endpoint to get an order by id
api.get("/orders/:id", (req, res) => {
  const order = dataservice.getOrderById(req.params.id);
  if (order != undefined) {
    res.json(order);
  } else {
    res.json({ message: "Didn't find order" });
  }
});

// Endpoint to update/edit an order
api.put("/orders/:id", (req, res) => {
  const { title, content } = req.body;
  if (dataservice.editOrder(req.params.id, title, content)) {
    res.json({ message: "order updated" });
  } else {
    res.json({ message: "error" });
  }
});

// Endpoint to delete an order
api.delete("/orders/:id", (req, res) => {
  if (dataservice.deleteOrder(req.params.id)) {
    res.json({ message: "order deleted" });
  } else {
    res.json({ message: "error" });
  }
});

api.listen(3000, () => {
  dataservice.read();
  console.log("api shop");
});
