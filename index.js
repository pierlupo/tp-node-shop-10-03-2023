import express from "express";
// import { Shop } from "./classes/app.js";
import {  CustomerService } from "./services/customerService.js";
import { OrderService } from "./services/orderService.js";
import { ProductService } from "./services/productService.js";
import productRouter from "./router/productRouter.js";
import customerRouter from "./router/customerRouter.js";
import orderRouter from "./router/orderRouter.js";
//cors installé par la cmd npm i cors
//(tout ce qui est dans les "dependencies" du fichier package.json s'installent avec npm i)
import cors from "cors";

//An object to manage the shop
//const dataservice = new Shop();

//Our object express
const app = express();

const port = 3001;

//Use of middleware json
app.use(express.json());

app.use(cors({origin:"*"}));

//création de services
export const customerService = new CustomerService();
export const productService = new ProductService();
export const orderService = new OrderService(customerService, productService);

//création de router

app.use('/prod', productRouter);
app.use('/cust', customerRouter);
app.use('/cmd', orderRouter);

// /*********Product Endpoints*********/

// // Endpoint to add a product
// app.post("/products", (req, res) => {
//   const { title, price, stock } = req.body;
//   if (title != undefined && price != undefined && stock != undefined) {
//     productService.addProduct(title, price, stock);
//     //dataservice.addProduct(title, price, stock);
//     res.json({ message: "product added" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// // Endpoint to get products
// app.get("/products", (req, res) => {
//   res.json(productService.data);  
//   //res.json(dataservice.products);
// });

// // Endpoint to get products by id
// app.get("/products/:id", (req, res) => {
//   const product = productService.getProductById(req.params.id);
//   //const product = dataservice.getProductById(req.params.id);
//   if (product != undefined) {
//     res.json(product);
//   } else {
//     res.json({ message: "Didn't find product" });
//   }
// });

// // Endpoint to update a product
// app.put("/products/:id", (req, res) => {
//   const { title, price, stock } = req.body;
//   if (productService.editProduct(req.params.id, title, price, stock)) {
//   //if (dataservice.editProduct(req.params.id, title, price, stock)) {
//     res.json({ message: "product updated" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// // Endpoint to delete a product
// app.delete("/products/:id", (req, res) => {
//   if (productService.deleteProduct(req.params.id)) {
//   //if (dataservice.deleteProduct(req.params.id)) {
//     res.json({ message: "product deleted" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// /*********Customer Endpoints*********/

// // Endpoint to add a customer
// app.post("/customers", (req, res) => {
//   const { name, firstname, phone } = req.body;
//   if (name != undefined && firstname != undefined && phone != undefined) {
//     customerService.addCustomer(name, firstname, phone);
//     //dataservice.addCustomer(name, firstname, phone);
//     res.json({ message: "customer added" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// // Endpoint to get customers
// app.get("/customers", (req, res) => {
//   res.json(customerService.data);
//   //res.json(dataservice.customers);
// });

// // Endpoint to get customers by id
// app.get("/customers/:id", (req, res) => {
//   const customer = customerService.getProductById(req.params.id);
//   //const customer = dataservice.getProductById(req.params.id);
//   if (customer != undefined) {
//     res.json(customer);
//   } else {
//     res.json({ message: "Didn't find customer" });
//   }
// });

// // Endpoint to update a customer
// app.put("/customers/:id", (req, res) => {
//   const { name, firstname, phone } = req.body;
//   if (customerService.editCustomer(req.params.id, name, firstname, phone)) {
//   //if (dataservice.editCustomer(req.params.id, name, firstname, phone)) {
//     res.json({ message: "customer updated" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// // Endpoint to delete a customer
// app.delete("/customers/:id", (req, res) => {
//   if (orderService.deleteCustomer(req.params.id)) {
//   //if (dataservice.deleteCustomer(req.params.id)) {
//     res.json({ message: "customer deleted" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// /*********Order Endpoints*********/

// // Endpoint to add an order
// app.post("/orders", (req, res) => {
//   const { title, content } = req.body;
//   if (title != undefined && content != undefined) {
//     orderService.addOrder(title, content);
//     //dataservice.addOrder(title, content);
//     res.json({ message: "order added" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// // Endpoint to get orders
// app.get("/orders", (req, res) => {
//   res.json(orderService.data);
//   //res.json(dataservice.orders);
// });

// // Endpoint to get an order by id
// app.get("/orders/:id", (req, res) => {
//   const order = orderService.getOrderById(req.params.id);
//   // const order = dataservice.getOrderById(req.params.id);
//   if (order != undefined) {
//     res.json(order);
//   } else {
//     res.json({ message: "Didn't find order" });
//   }
// });

// // Endpoint to update/edit an order
// app.put("/orders/:id", (req, res) => {
//   const { title, content } = req.body;
//   if (orderService.editOrder(req.params.id, title, content)) {
//   // if (dataservice.editOrder(req.params.id, title, content)) {
//     res.json({ message: "order updated" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

// // Endpoint to delete an order
// app.delete("/orders/:id", (req, res) => {
//   if (orderService.deleteOrder(req.params.id)) {
//   // if (dataservice.deleteOrder(req.params.id)) {
//     res.json({ message: "order deleted" });
//   } else {
//     res.json({ message: "error" });
//   }
// });

app.listen(3001, () => {
  productService.read();
  customerService.read();
  orderService.read();
  //dataservice.read();
  console.log(`serveur en cours à l'adresse http://localhost:${port}`);
});
