import * as Styles from "@/src/presentation/styles/components/TabNavigation";
import { useAppSelector } from "@/src/application/store/hooks/useAppSelector";

function TabNavigation({ state, descriptors, navigation }: any) {
  const cartItems = useAppSelector((state: any) => state.orders.cartItems);

  return (
    <Styles.Menu>
      {state.routes.map(
        (
          route: { key: string | number; name: any; params: any },
          index: any
        ) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Styles.Tab
              key={index}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <Styles.TabLabel theme={isFocused ? { isFocused: true } : {}}>
                {label}
              </Styles.TabLabel>
              {route.name === "sacola" && cartItems.length > 0 && (
                <Styles.Count>
                  <Styles.CountText>{cartItems.length}</Styles.CountText>
                </Styles.Count>
              )}
            </Styles.Tab>
          );
        }
      )}
    </Styles.Menu>
  );
}

export default TabNavigation;
