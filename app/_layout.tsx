import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { useColorScheme } from "react-native";
import Colors from "../constants/Colors";
import { TextInput } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "home",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack
        screenOptions={{
          headerBackTitleVisible: false,
          headerBackImageSource: require("../assets/images/back.png"),
          headerStyle: {
            backgroundColor: Colors.light.background,
          },
          headerShadowVisible: false,
          headerTitle: "",
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen
          name="medication_detail"
          options={{ headerBackTitleVisible: false }}
        />
        <Stack.Screen
          name="doctor_selection"
          options={{
            headerBackTitleVisible: true,
          }}
        />
        <Stack.Screen
          name="video_call"
          options={{
            headerBackTitleVisible: false,
            headerTransparent: true,
            headerStyle: { backgroundColor: "transparent" },
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
