import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function RootLayoutScreens() {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="splash"
        options={{ title: "Splash Screen", headerShown: false }}
      />
    </Stack>
  );
}
