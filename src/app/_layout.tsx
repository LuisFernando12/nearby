import { Stack } from "expo-router";
import { colors } from "../styles/colors";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  Rubik_400Regular,
  Rubik_500Medium,
  Rubik_600SemiBold,
  Rubik_700Bold,
  useFonts,
} from "@expo-google-fonts/rubik";
import Loading from "../components/loading";

const Layout = () => {
  const [fontsLoaded] = useFonts({
    Rubik_400Regular,
    Rubik_500Medium,
    Rubik_600SemiBold,
    Rubik_700Bold,
  });
  if (!fontsLoaded) {
    return <Loading />;
  }
  return (
    <GestureHandlerRootView>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: colors.gray[100],
          },
        }}
      />
    </GestureHandlerRootView>
  );
};

export default Layout;
