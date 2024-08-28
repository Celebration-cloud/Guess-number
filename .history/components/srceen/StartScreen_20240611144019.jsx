import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, Button, TextInput, TouchableWithoutFeedback, Keyboard } from 'react-native'
import colorTheme from '../../constants/colorTheme';
import Input from '../Input';
export default function StartScreen(props) {
  const [inputEl, setInputEl] = useState(Number)
  const handleChange =(input)=> {
    setInputEl(input.replace(/[^0-9]/g, ""))
  }
  console.log(inputEl)
    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>


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
