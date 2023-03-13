import { BaseService } from "./BaseService.js";
import { Order } from "../classes/order.js";

export class OrderService extends BaseService {
  constructor(customerService, productService) {
    super("./data/orders.json");

    (this.customerService = customerService),
      (this.productService = productService);
  }

  /*********Order part*********/

  //Méthod to add an order
  addOrder(customerId, products) {
    const customer = this.customerService.getCustomerById(customerId);
    if (customer != undefined) {
      const orderProducts = [];
      products.forEach((p) => {
        const product = this.productService.getProductById(p.id);
        if (product != undefined && p.qty > 0) {
          if (product.stock >= p.qty) {
            orderProducts.push({ product: product, qty: p.qty });
            this.productService.updateProductStockById(p.id, p.qty);
          }
        }
      });
      const order = new Order(++this.counter,customer,orderProducts) 
      this.data.push(order)
      this.write()
      return true;
    }
    return false;
  }

  // Méthod to get an order by id
  getOrderById(id) {
    return this.data.find((o) => o.id == id);
  }

  // Méthod to get all customer by id
  getAllOrders() {
    return this.data;
  }

  //Méthod to edit an order
  editOrder(customer, products) {
    const order = this.getOrderById(id);
    if (order != undefined) {
      order.customer = customer;
      order.products = products;
      this.write();
      return true;
    }
    return false;
  }

  //Méthod to delete an order
  deleteOrder(id) {
    const order = this.getOrderById(id);
    if (order != undefined) {
      this.data = this.data.filter((o) => o.id != id);
      this.write();
      return true;
    }
    return false;
  }
}
