import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import colorTheme from "../../constants/colorTheme";
import Input from "../Input";
let start;
let summary;
export default function Cards({  status, chosenNum, inputEl, handleChange, handleConfirm, handleReset}) {
  
  if (status === "start") {
    start = (
      <View style={styles.content}>
        <Text style={styles.title}>Select a number:</Text>
        <Input
          maxLength={2}
          onChangeText={handleChange}
          value={inputEl}
          keyboardType="number-pad"
        />
        <View style={styles.gpBtn}>
          <View style={styles.button}>
            <Button
              title="Reset"
              onPress={handleReset}
              color={colorTheme.secondary}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="Confirm"
              onPress={handleConfirm}
              color={colorTheme.primary}
            />
          </View>
        </View>
      </View>
    );
  }
  if (status === "summary") {
    summary = (
      <View style={styles.content}>
        <Text style={styles.title}>You Selected</Text>
        <View>
          <Text>{chosenNum}</Text>
        </View>
        <Button color={colorTheme.primary} title="START GAME" />
      </View>
    );
  }
  return start;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
  },
  content: {
    width: 300,
    alignItems: "center",
    gap: 20,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 5,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
  },
  gpBtn: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    width: 100,
  },
});
