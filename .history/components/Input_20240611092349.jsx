import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput  style={styles.input} placeholder="Place Number" />
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        height: "100%"
    }
})
