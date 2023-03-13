import { BaseService } from "./BaseService.js";
import { Product } from "../classes/product.js";

export class ProductService extends BaseService {
  constructor() {
    super("./data/products.json");
  }

  /*********Product part*********/

  //Méthod to add a product
  addProduct(title, price, stock) {
    const product = new Product(++this.counter, title, price, stock);
    this.data.push(product);
    this.write();
  }

  // Méthod to get a product by id
  getProductById(id) {
    return this.data.find((p) => p.id == id);
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

  //Method to manage stock
  updateProductStockById(id, qty) {
    const product = this.getProductById(id);
    //beaucoup de tests conditionnels peuvent être rajoutés (qty > 0, qty > à ce que l'on veut déduire...)
    if (product != undefined) {
      product.stock -= qty;
      this.write();
      return true;
    }
    return false;
  }
}
