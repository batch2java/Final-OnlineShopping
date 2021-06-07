import { Product } from "./product";

export class OrderInfo{
orderId!:number;
orderStatus!:string;
orderDate!:Date
productList: Product[] = [];
}