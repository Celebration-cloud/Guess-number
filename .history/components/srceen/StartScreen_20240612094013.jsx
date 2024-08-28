import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import colorTheme from '../../constants/colorTheme';
import Input from '../Input';
import Cards from '../cards/Cards';
let numbers;
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
    setInputEl(Number)
    console.log(chosenNum)
  }
  console.log(inputEl)
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.startScreen}>
          <Text style={styles.start}> Start a new Game </Text>
          <Cards
            status="start"
            inputEl={inputEl}
            handleChange={handleChange}
            handleConfirm={handleConfirm}
            handleReset={handleReset}
            chosenNum={chosenNum}
          />
          {chosenNum > 0 && <Cards chosenNum={chosenNum} status="summary" />}
          {numbers}
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
    }
})
