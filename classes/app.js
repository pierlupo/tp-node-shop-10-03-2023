import { writeFileSync, readFileSync } from "fs";
import { Product } from "./product.js";
import { Customer } from "./customer.js";

export class Shop {
  constructor() {
    this.products = [];
    this.productCounter = 0;
    this.customers = [];
    this.customerCounter = 0;
    this.productFile = "productdata.json";
    this.customerFile = "customerdata.json";
    this.orderFile = "orderdata.json";
  }

  read() {
    const productContent = readFileSync(this.productFile).toString();
    this.products = JSON.parse(productContent);
    this.productCounter =
      this.products[this.products.length - 1] != undefined
        ? this.products[this.products.length - 1].id
        : 0;
    const customerContent = readFileSync(this.customerFile).toString();
    this.customers = JSON.parse(customerContent);
    this.customerCounter =
      this.customers[this.customers.length - 1] != undefined
        ? this.customers[this.customers.length - 1].id
        : 0;
  }

  write() {
    writeFileSync(this.productFile, JSON.stringify(this.products));
    writeFileSync(this.customerFile, JSON.stringify(this.customers));
  }

  /*********Product part*********/

  //Méthod to add a product
  addProduct(title, price, stock) {
    const product = new Product(++this.productCounter, title, price, stock);
    this.products.push(product);
    this.write();
  }

  // Méthod to get a product by id
  getProductById(id) {
    return this.products.find((p) => p.id == id);
  }

  //Méthod to edit a product
  editProduct(id, title, price, stock) {
    const product = this.getProductById(id);
    if (product != undefined) {
      product.title = title;
      product.price = price;
      product.stock = stock;
      this.write();
      return true;
    }
    return false;
  }

  //Méthod to delete a product
  deleteProduct(id) {
    const product = this.findProductById(id);
    if (product != undefined) {
      this.products = this.products.filter((p) => p.id != id);
      this.write();
      return true;
    }
    return false;
  }

  /*********Customer part*********/

  //Méthod to add a customer
  addCustomer(name, firstname, phone) {
    const customer = new Customer(
      ++this.customerCounter,
      name,
      firstname,
      phone
    );
    this.customers.push(customer);
    this.write();
  }

  // Méthod to get a customer by id
  getCustomerById(id) {
    return this.customers.find((c) => c.id == id);
  }

  //Méthod to edit a customer
  editProduct(id, name, firstname, phone) {
    const customer = this.getCustomerById(id);
    if (customer != undefined) {
      customer.name = name;
      customer.firstname = firstname;
      customer.phone = phone;
      this.write();
      return true;
    }
    return false;
  }

  //Méthod to delete a customer
  deleteCustomer(id) {
    const customer = this.getCustomerById(id);
    if (customer != undefined) {
      this.customers = this.customers.filter((c) => c.id != id);
      this.write();
      return true;
    }
    return false;
  }
}
