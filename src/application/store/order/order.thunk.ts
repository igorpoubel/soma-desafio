import { Product } from "@/src/domain/entities/product.entity";
import { CartRepository } from "@/src/domain/repositories/cart.repository";
import { AddProductToCartUseCase } from "@/src/domain/usecases/add-to-cart.usecase";
import { RemoveProductFromCartUseCase } from "@/src/domain/usecases/remove-from-cart.usecase";
import orderSlice from "./order.slice";

export const addProductToCart =
  (product: Product, quantity: number) => (dispatch: any) => {
    const cartRepository = new CartRepository();
    const addProductToCartUseCase = new AddProductToCartUseCase(cartRepository);
    const cartItem = addProductToCartUseCase.execute(product, quantity);
    dispatch(orderSlice.actions.addCartItem(cartItem));
  };

export const removeProductFromCart =
  (product: Product, quantity: number) => (dispatch: any) => {
    const cartRepository = new CartRepository();
    const removeProductFromCartUseCase = new RemoveProductFromCartUseCase(
      cartRepository
    );
    removeProductFromCartUseCase.execute(product, quantity);
    dispatch(orderSlice.actions.removeCartItem({ product, quantity }));
  };
