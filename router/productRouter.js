import express from 'express';
import { productService } from '../index.js';


const productRouter = express.Router();


// Endpoint to add a product
productRouter.post("/products", (req, res) => {
    const { title, price, stock } = req.body;
    if (title != undefined && price != undefined && stock != undefined) {
      productService.addProduct(title, price, stock);
      //dataservice.addProduct(title, price, stock);
      res.json({ message: "product added" });
    } else {
      res.json({ message: "error" });
    }
  });

// Endpoint to get products
productRouter.get("/products", (req, res) => {
    res.json(productService.data);  
    //res.json(dataservice.products);
  });

// Endpoint to get products by id
productRouter.get("/products/:id", (req, res) => {
    const product = productService.getProductById(req.params.id);
    //const product = dataservice.getProductById(req.params.id);
    if (product != undefined) {
      res.json(product);
    } else {
      res.json({ message: "Didn't find product" });
    }
  });


// Endpoint to update a product
productRouter.put("/products/:id", (req, res) => {
  const { title, price, stock } = req.body;
  if (productService.editProduct(req.params.id, title, price, stock)) {
  //if (dataservice.editProduct(req.params.id, title, price, stock)) {
    res.json({ message: "product updated" });
  } else {
    res.json({ message: "error" });
  }
});


// Endpoint to delete a product
productRouter.delete("/products/:id", (req, res) => {
    if (productService.deleteProduct(req.params.id)) {
    //if (dataservice.deleteProduct(req.params.id)) {
      res.json({ message: "product deleted" });
    } else {
      res.json({ message: "error" });
    }
  });
  
export default productRouter