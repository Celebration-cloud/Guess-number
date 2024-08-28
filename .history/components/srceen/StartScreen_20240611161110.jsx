import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import colorTheme from '../../constants/colorTheme';
import Input from '../Input';
export default function StartScreen(props) {
  const [inputEl, setInputEl] = useState(Number)
  const [chosenNum, setChosenNum] = useState(Number)
  const handleChange =(input)=> {
    setInputEl(input.replace(/[^0-9]/g, ""))
  }
  function handleReset(){
    setInputEl(Number)
  }
  function handleConfirm(){
    if(isNaN(inputEl) || inputEl <= 0  ){
      Alert.alert("Invalid Input", "Number must be between 1-99", [{onPress: handleReset}])
      return;
    }
    setChosenNum(parseInt(inputEl))
    setInputEl()
    console.log(chosenNum)
  }
  console.log(inputEl)
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.startScreen}>
          <Text style={styles.start}> Start a new Game </Text>
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
                <Button title="Reset" onPress={handleReset} color={colorTheme.secondary} />
              </View>
              <View style={styles.button}>
                <Button title="Confirm" onPress={handleConfirm} color={colorTheme.primary} />
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    startScreen:{
        fontSize: 20,
        alignItems: "center",
        gap: 20
    },
    start: {
        fontSize: 25
    },
    title: {
        fontSize: 20
    },
    content: {
        width: 400,
        alignItems: "center",
        gap: 20,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 20,
        elevation: 5,
        backgroundColor: "white",
        padding: 20,
        borderRadius: 10
    },
    gpBtn: {
        flexDirection: "row",
        gap: 20
    },
    button: {
        width: 100
    }
})
