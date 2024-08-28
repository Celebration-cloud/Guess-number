import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default function StartScreen() {
    return (
      <View style={styles.startScreen}>
        <Text> Start a new Game </Text>
        <View>
            <Text>Select a number</Text>
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
    start
})