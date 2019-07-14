import React from 'react'
import { StyleSheet, Text } from 'react-native'

interface ButtonProps {
  text: string;
}

export const Button = ({ text }: ButtonProps) => {
  return <Text style={styles.text}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 24
  }
})
