import { View, Text } from "react-native";
import { Redirect } from "expo-router";

export default function HomeScreens() {
  return (
    <Redirect href={"/splash"} />
  );
}
