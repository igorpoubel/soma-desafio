import { Product } from "./product.entity";

export interface OrderItem {
  product: Product;
  quantity: number;
}
