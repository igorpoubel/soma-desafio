import { IProduct } from "./product";

export interface IOrder {
  id: string | number;
  products: {
    id: number;
    quantity: number;
    price: number;
  }[];
  total: number;
}
