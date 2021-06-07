import { Category } from "./category";

export class Product {
    productId: number=0;
    productImage: string='';
    productName: string='';
    price: number=0;
    color: string='';
    dimension: string='';
    specification:string='';
    manufacturer:string='';
    quantity: number=0;
    category:Category= new Category;
}