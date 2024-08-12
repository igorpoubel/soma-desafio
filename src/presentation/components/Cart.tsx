import React from "react";
import { View, Text, FlatList } from "react-native";
import { useAppSelector } from "@/src/application/store/hooks/useAppSelector";
import { useAppDispatch } from "@/src/application/store/hooks/useAppDispatch";
import { removeProductFromCart } from "@/src/application/store/order/order.thunk";

import * as Styles from "@/src/presentation/styles/components/Cart";
import * as GlobalStyles from "@/src/presentation/styles/Global";
import { formatPrice } from "../utils/PriceFormat";
import { OrderItem } from "@/src/domain/entities/order.entity";

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: any) => state.orders.cartItems);

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeProductFromCart(item.product, 1));
  };

  const total = cartItems.reduce(
    (acc: number, item: OrderItem) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <Styles.Container>
      <Text>Sacola</Text>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.product.id}
        renderItem={({ item }) => (
          <Styles.Item>
            <Styles.Image source={{ uri: item.product.images[0] }} />
            <Styles.Details>
              <Styles.Name>{item.product.name}</Styles.Name>
              <Text>Quantidade: {item.quantity}</Text>
              <Text>
                Total: {formatPrice(item.product.price * item.quantity)}
              </Text>
              <GlobalStyles.Button onPress={() => handleRemoveFromCart(item)}>
                <GlobalStyles.ButtonText>Remover</GlobalStyles.ButtonText>
              </GlobalStyles.Button>
            </Styles.Details>
          </Styles.Item>
        )}
      />
      <Text>Total: {formatPrice(total)}</Text>
    </Styles.Container>
  );
};

export default Cart;
