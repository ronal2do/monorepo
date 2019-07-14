import React from 'react'
import { StyleSheet, Text } from 'react-native'
import { useThemeContext } from '../../ThemeContext';

interface TypographyProps {
  text: string;
}

export const Typography = ({ text }: TypographyProps) => {
  const { theme } = useThemeContext();

  return <Text style={[styles.text, { color: theme.defaultTextColor }]}>{text}</Text>
}

const styles = StyleSheet.create({
  text: {
    alignItems: 'center',
    fontSize: 24
  }
})
