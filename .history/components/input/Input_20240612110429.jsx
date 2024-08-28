import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput {...props} />;
}

const styles = StyleSheet.create({
    input: {
        borderBottomColor: "black",
        textAlign: "center",
        fontSize: 20,
        borderBottomWidth: 1,
        width: "10%"
    }
})