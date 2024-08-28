import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
import Heading from "./components/header/Heading";
import StartScreen from "./components/srceen/StartScreen";

export default function App() {
  return (
    <TouchableWithoutFeedback onP> 

    </TouchableWithoutFeedback>
    <View style={styles.container}>
      <Heading/>
      <StartScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    gap: 20
  },
});
