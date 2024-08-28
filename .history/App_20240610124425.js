import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Heading from "./components/header/Heading";

export default function App() {
  return (
    <View style={styles.container}>
      <Heading/>
      <Sta
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
