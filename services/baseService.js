import { writeFileSync, readFileSync } from "fs";

export class BaseService {
  constructor(file) {

     this.data = [],
     this.counter = 0,
     this.file = file;
     
  }

  read() {
    const dataString = readFileSync(this.file).toString();
    this.data = JSON.parse(dataString);
    this.counter =
      this.data[this.data.length - 1] > undefined
        ? this.data[this.data.length - 1].id
        : 0;
    // const productContent = readFileSync(this.productFile).toString();
    // this.products = JSON.parse(productContent);
    // this.productCounter =
    //   this.products[this.products.length - 1] != undefined
    //     ? this.products[this.products.length - 1].id
    //     : 0;
    // const customerContent = readFileSync(this.customerFile).toString();
    // this.customers = JSON.parse(customerContent);
    // this.customerCounter =
    //   this.customers[this.customers.length - 1] != undefined
    //     ? this.customers[this.customers.length - 1].id
    //     : 0;
    // const orderContent = readFileSync(this.orderFile).toString();
    // this.orders = JSON.parse(orderContent);
    // this.orderCounter =
    //   this.orders[this.orders.length - 1] != undefined
    //     ? this.orders[this.orders.length - 1].id
    //     : 0;
  }

  write() {
    writeFileSync(this.file, JSON.stringify(this.data));
  }
}
