import { OrderItem } from "../entities/order.entity";
import { OrderRepository } from "../repositories/order.repository";
import { Product } from "@/src/domain/entities/product.entity";

export class RemoveProductFromCartUseCase {
  private orderRepository: OrderRepository;

  constructor(orderRepository: OrderRepository) {
    this.orderRepository = orderRepository;
  }

  execute(product: Product, quantity: number): void {
    this.orderRepository.removeProductFromCart(product, quantity);
  }
}
