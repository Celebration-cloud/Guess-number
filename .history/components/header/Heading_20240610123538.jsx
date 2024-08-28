import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Heading() {
  return (
    <View style={styles.header}>
      <Text> Guess Game </Text>
      <Text>coojoj</Text>
      
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "red",
        color: "white",
        width: "100%",
        paddingTop: "10%",
        
    }
});
