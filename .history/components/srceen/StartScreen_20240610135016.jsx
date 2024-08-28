import React, { Component } from 'react'
import { Text, StyleSheet, View, Button, TextInput } from 'react-native'

export default function StartScreen() {
    return (
      <View style={styles.startScreen}>
        <Text style={styles.start}> Start a new Game </Text>
        <View style={styles.content}>
            <Text>Select a number</Text>
            <TextInput placeholder='Place Number'/>
            <View>
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
        
    },
    start: {
        fontSize: 25
    },
    content: {
        gap: 20
    }
})
