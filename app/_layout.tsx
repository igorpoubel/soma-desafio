import { Slot } from "expo-router";
import { SafeAreaView } from "@/src/presentation/styles/Global";
import Header from "@/src/presentation/components/Header";
import { Provider } from "react-redux";
import { store } from "@/src/application/store";

import * as GlobalStyles from "@/src/presentation/styles/Global";

export default function Layout() {
  return (
    <Provider store={store}>
      <GlobalStyles.SafeAreaView>
        <Header />
        <Slot />
      </GlobalStyles.SafeAreaView>
    </Provider>
  );
}
