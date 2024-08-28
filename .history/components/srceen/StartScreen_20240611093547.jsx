import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'
import btnColors from '../../constants/btnColors';
import Input from '../Input';
export default function StartScreen(props) {
  const [inputEl]
    return (
      <View style={styles.startScreen}>
        <Text style={styles.start}> Start a new Game </Text>
        <View style={styles.content}>
          <Text style={styles.title}>Select a number:</Text>
          <Input maxLength={2} keyboardType="number-pad" />
          <View style={styles.gpBtn}>
            <View style={styles.button}>
              <Button title="Reset" color={btnColors.secondary} />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" color={btnColors.primary} />
            </View>
          </View>
        </View>
      </View>
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
