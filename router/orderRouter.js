import express from 'express';
import { orderService } from '../index.js';


 const orderRouter = express.Router();



// Endpoint to add an order
orderRouter.post('/orders', (req, res) => {
    const {customerId, products} = req.body
    console.log(customerId, products);
    if(orderService.addOrder(customerId,products)){
        res.json({ message: "commande ajouté" })
    }else {
        res.json({ message: "erreur" })
    }
})

  
  // Endpoint to get orders
  orderRouter.get("/orders", (req, res) => {
    res.json(orderService.data);
    //res.json(dataservice.orders);
  });
  
  // Endpoint to get an order by id
  orderRouter.get("/orders/:id", (req, res) => {
    const order = orderService.getOrderById(req.params.id);
    // const order = dataservice.getOrderById(req.params.id);
    if (order != undefined) {
      res.json(order);
    } else {
      res.json({ message: "Didn't find order" });
    }
  });
  
  // Endpoint to update/edit an order
  orderRouter.put("/orders/:id", (req, res) => {
    const { title, content } = req.body;
    if (orderService.editOrder(req.params.id, title, content)) {
    // if (dataservice.editOrder(req.params.id, title, content)) {
      res.json({ message: "order updated" });
    } else {
      res.json({ message: "error" });
    }
  });
  
  // Endpoint to delete an order
  orderRouter.delete("/orders/:id", (req, res) => {
    if (orderService.deleteOrder(req.params.id)) {
    // if (dataservice.deleteOrder(req.params.id)) {
      res.json({ message: "order deleted" });
    } else {
      res.json({ message: "error" });
    }
  });

  export default orderRouter