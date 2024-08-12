import { Product } from "@/src/domain/entities/product.entity";
import { OrderItem } from "@/src/domain/entities/order.entity";
import { OrderRepository } from "@/src/domain/repositories/order.repository";

export class CartRepository implements OrderRepository {
  private orderItems: OrderItem[] = [];

  addProductToCart(product: Product, quantity: number): OrderItem {
    const existingItem = this.orderItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      const newItem: OrderItem = { product, quantity };
      this.orderItems.push(newItem);
    }
    return { product, quantity };
  }

  removeProductFromCart(product: Product, quantity: number): void {
    const existingItem = this.orderItems.find(
      (item) => item.product.id === product.id
    );
    if (existingItem) {
      existingItem.quantity -= quantity;
      if (existingItem.quantity <= 0) {
        this.orderItems = this.orderItems.filter(
          (item) => item.product.id !== product.id
        );
      }
    }
  }

  getCartItems(): OrderItem[] {
    return this.orderItems;
  }
}
