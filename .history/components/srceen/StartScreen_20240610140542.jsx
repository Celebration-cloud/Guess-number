import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

export default function StartScreen() {
    return (
      <View style={styles.startScreen}>
        <Text style={styles.start}> Start a new Game </Text>
        <View style={styles.content}>
            <Text>Select a number</Text>
            <TextInput placeholder='Place Number'/>
            <View style={styles.gpBtn}>
                <Button title='Reset'/>
                <Button title='Confirm'/>
            </View>
        </View>
      </View>
    )
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
        gap: 20,
        shadowColor: "black",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        elevation: 5,
        backgroundColor: "white",
        padding: 20,
    
    }
})
