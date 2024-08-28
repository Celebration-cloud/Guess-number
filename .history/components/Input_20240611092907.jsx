import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput {...props} style={styles.input}  />
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "black",
        textAlign: "center",
        fontSize: 20,
        borderBottomWidth: 1,
    }
})
