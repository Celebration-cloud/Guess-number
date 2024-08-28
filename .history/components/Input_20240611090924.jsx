import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput } from 'react-native'

export default function Input(props) {
    return <TextInput {...props} {styles, ...props.s}placeholder="Place Number" />
}

const styles = StyleSheet.create({

})
