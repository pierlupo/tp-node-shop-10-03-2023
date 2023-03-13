import express from 'express';
import { customerService } from '../index.js';


 const customerRouter = express.Router();


 // Endpoint to add a customer
 customerRouter.post("/customers", (req, res) => {
    const { name, firstname, phone } = req.body;
    if (name != undefined && firstname != undefined && phone != undefined) {
      customerService.addCustomer(name, firstname, phone);
      //dataservice.addCustomer(name, firstname, phone);
      res.json({ message: "customer added" });
    } else {
      res.json({ message: "error" });
    }
  });
  
  // Endpoint to get customers
  customerRouter.get("/customers", (req, res) => {
    res.json(customerService.data);
    //res.json(dataservice.customers);
  });
  
  // Endpoint to get customers by id
  customerRouter.get("/customers/:id", (req, res) => {
    const customer = customerService.getCustomerById(req.params.id);
    //const customer = dataservice.getProductById(req.params.id);
    if (customer != undefined) {
      res.json(customer);
    } else {
      res.json({ message: "Didn't find customer" });
    }
  });
  
  // Endpoint to update a customer
  customerRouter.put("/customers/:id", (req, res) => {
    const { name, firstname, phone } = req.body;
    if (customerService.editCustomer(req.params.id, name, firstname, phone)) {
    //if (dataservice.editCustomer(req.params.id, name, firstname, phone)) {
      res.json({ message: "customer updated" });
    } else {
      res.json({ message: "error" });
    }
  });
  
  // Endpoint to delete a customer
  customerRouter.delete("/customers/:id", (req, res) => {
    if (orderService.deleteCustomer(req.params.id)) {
    //if (dataservice.deleteCustomer(req.params.id)) {
      res.json({ message: "customer deleted" });
    } else {
      res.json({ message: "error" });
    }
  });

  export default customerRouter