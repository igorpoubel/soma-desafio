import { Product } from "@/src/domain/entities/product.entity";
import { ProductRepository } from "@/src/domain/repositories/product.repository";
import { IHttpClient } from "@/src/infrastructure/interfaces/httpclient";

export class ProductRepositoryImpl implements ProductRepository {
  constructor(private httpClient: IHttpClient) {}

  async getProducts(): Promise<Product[]> {
    const response = await this.httpClient.request("GET", "/products");
    return response.data;
  }
}
