import { Product } from "@/src/domain/entities/product.entity";
import { OrderItem } from "@/src/domain/entities/order.entity";

export interface OrderRepository {
  addProductToCart: (product: Product, quantity: number) => OrderItem;
  // removeProductFromCart: (product: Product, quantity: number) => OrderItem;
  removeProductFromCart: (product: Product, quantity: number) => void;
  getCartItems: () => OrderItem[];
}
