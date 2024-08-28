import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import colorTheme from '../../constants/colorTheme';
import Input from '../Input';
import Cards from '../cards/Cards';
let numbers;
export default function StartScreen(props) {
  
  numbers = chosenNum > 0 && <Text style={{fontSize: 20}}>The chosen Number: {chosenNum}</Text>
  console.log(inputEl)
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.startScreen}>
          <Text style={styles.start}> Start a new Game </Text>
          <Cards styles={styles} status="start"/>
          {chosenNum > 0 && <Cards status="summary"/>}
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
    },
    title: {
        fontSize: 20
    },
    content: {
        width: 300,
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
