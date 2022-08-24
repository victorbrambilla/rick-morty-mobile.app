import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'

export const Header = () => {
  return (
    <>
      <StatusBar style={'light'} />
      <Appbar.Header dark={true} style={styles.container}>
        <Image source={require('../../../assets/logo.png')} style={styles.logo} />
      </Appbar.Header>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: 80,
    backgroundColor: 'rgb(18, 18, 18);',
  },
  title: {
    color: 'white',
  },
  logo: {
    width: 200,
    height: 60,
  },
})
