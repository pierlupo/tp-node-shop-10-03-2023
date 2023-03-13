import { BaseService } from "./BaseService.js";
import { Customer } from "../classes/customer.js";

export class CustomerService extends BaseService {
  constructor() {
    super("./data/customers.json");
  }

  /*********Customer part*********/

  //Méthod to add a customer
  addCustomer(name, firstname, phone) {
    const customer = new Customer(
      // ++this.customerCounter,
      ++this.counter,
      name,
      firstname,
      phone
    );
    this.data.push(customer);
    this.write();
  }

  // Méthod to get a customer by id
  getCustomerById(id) {
    return this.data.find((c) => c.id == id);
  }
  // Méthod to get all customer by id
  getAllCustomer() {
    return this.data;
  }
  //Méthod to edit a customer
  editCustomer(id, name, firstname, phone) {
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
}
