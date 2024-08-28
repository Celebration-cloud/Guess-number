import React, { Component } from 'react'
import { Text, StyleSheet, View, Button } from 'react-native'

export default function StartScreen() {
    return (
      <View style={styles.startScreen}>
        <Text style={styles.start}> Start a new Game </Text>
        <View>
            <Text>Select a number</Text>
            <View>
                <Button t/>
            </View>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    startScreen:{
        fontSize: 20,
        alignItems: "center"

    },
    start: {
        fontSize: 25
    }
})
