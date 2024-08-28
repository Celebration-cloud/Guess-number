import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

export default function StartScreen() {
    return (
      <View style={styles.startScreen}>
        <Text style={styles.start}> Start a new Game </Text>
        <View style={styles.content}>
          <Text>Select a number</Text>
          <TextInput placeholder="Place Number" />
          <View style={styles.gpBtn}>
            <View style={styles.button}>
              <Button title="Reset" />
            </View>
            <View style={styles.button}>
              <Button title="Confirm" />
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
    content: {
        width: 400,
        alignItems: "center",
        gap: 20,
        fon
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
