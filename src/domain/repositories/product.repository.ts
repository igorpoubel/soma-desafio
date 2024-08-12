import { Product } from "@/src/domain/entities/product.entity";

export interface ProductRepository {
  getProducts: () => Promise<Product[]>;
}
