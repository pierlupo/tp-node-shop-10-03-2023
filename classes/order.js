import { Customer } from "./customer";

export class Order extends Customer {
    constructor(id,title){
        this.id = id,
        this.title = title,
        this.content = content,
        this.status = false
    }
}