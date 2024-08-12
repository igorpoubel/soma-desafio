import React, { useEffect } from "react";
import { View, Text, Button, FlatList, ActivityIndicator } from "react-native";
import { fetchProducts } from "@/src/application/store/product/product.thunk";
import { addProductToCart } from "@/src/application/store/order/order.thunk";
import { useAppSelector } from "@/src/application/store/hooks/useAppSelector";
import { useAppDispatch } from "@/src/application/store/hooks/useAppDispatch";

import * as Styles from "@/src/presentation/styles/components/ProductList";
import * as GlobalStyles from "@/src/presentation/styles/Global";
import { formatPrice } from "../utils/PriceFormat";

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products, loading } = useAppSelector((state: any) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAddToCart = (product: any) => {
    dispatch(addProductToCart(product, 1));
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <FlatList
      numColumns={2}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Styles.Item>
          <Styles.Image source={{ uri: item.images[0] }} />
          <Text>{item.name}</Text>
          <Text>{item.description}</Text>
          <Text>{formatPrice(item.price)}</Text>
          <GlobalStyles.Button onPress={() => handleAddToCart(item)}>
            <GlobalStyles.ButtonText>Comprar</GlobalStyles.ButtonText>
          </GlobalStyles.Button>
        </Styles.Item>
      )}
    />
  );
};

export default ProductList;
