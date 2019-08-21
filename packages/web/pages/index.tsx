import React from 'react';
import { NextPageContext } from 'next';
import { StyleSheet, View } from 'react-native'
import { Typography, useThemeContext } from '@boilerplate/ui'

interface Props {
  userAgent: string;
}

function Page({ userAgent }: Props) {
  const { theme } = useThemeContext()

  return (
    <View style={[styles.container, { backgroundColor: theme.primaryColor }]}>
      <Typography text={`Your user agent ${userAgent}`}/>
    </View>
  )
}

Page.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
})

export default Page
