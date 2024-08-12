import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { SafeAreaView } from "react-native";
import TabNavigation from "@/src/presentation/components/TabNavigation";

export default function AppLayout() {
  return (
    <Tabs
      initialRouteName="index"
      tabBar={(props) => <TabNavigation {...props} />}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="home" size={size} color={color} />;
            }
            return <Ionicons name="home-outline" size={size} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="sacola"
        options={{
          title: "Sacola",
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => {
            if (focused) {
              return <Ionicons name="bag" size={size} color={color} />;
            }
            return <Ionicons name="bag-outline" size={size} color={color} />;
          },
        }}
      />
    </Tabs>
  );
}
