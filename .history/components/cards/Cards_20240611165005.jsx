import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'
import colorTheme from "../../constants/colorTheme";
import Input from "../Input";
export default function Cards({styles, status}) {
  const [inputEl, setInputEl] = useState(Number);
  const [chosenNum, setChosenNum] = useState(Number);
    const handleChange = (input) => {
      setInputEl(input.replace(/[^0-9]/g, ""));
    };
    function handleReset() {
      setInputEl(Number);
    }
    function handleConfirm() {
      if (isNaN(inputEl) || inputEl <= 0) {
        Alert.alert("Invalid Input", "Number must be between 1-99", [
          { onPress: handleReset },
        ]);
        return;
      }
      setChosenNum(parseInt(inputEl));
      setInputEl(Number);
      console.log(chosenNum);
    }
    let start;
    if(status === "start"){
       start
    }
    return (
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

const styles = StyleSheet.create({})
