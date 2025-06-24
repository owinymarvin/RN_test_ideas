import { View, Text } from "react-native";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { useWindowDimensions } from "react-native";
import { useEffect } from "react";

export default function SplashScreen() {
  const router = useRouter();
  const { width, height } = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      router.push("/(tabs)");
    }, 4000);
  });

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#5E5E5E",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
      }}
    >
      <Text style={{ fontSize: 40, color: "#fff", fontWeight: 600 }}>
        DMARV
      </Text>

      <Image
        source={require("@/assets/images/react-logo.png")}
        style={{ width:'100%', height: 80 }}
      />
    </View>
  );
}
