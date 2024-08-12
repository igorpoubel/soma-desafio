import { OrderItem } from "@/src/domain/entities/order.entity";
import { Product } from "@/src/domain/entities/product.entity";
import { OrderRepository } from "@/src/domain/repositories/order.repository";

export class AddProductToCartUseCase {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  execute(product: Product, quantity: number): OrderItem {
    return this.orderRepository.addProductToCart(product, quantity);
  }
}
