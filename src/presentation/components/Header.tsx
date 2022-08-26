import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { Appbar } from 'react-native-paper'

interface IProps {
  props: NativeStackHeaderProps
}
export const Header = ({ ...props }: IProps) => {
  const { navigation, back } = props.props
  return (
    <>
      <StatusBar style={'light'} />
      <Appbar.Header dark={true} style={styles.container}>
        {back ? <Appbar.BackAction iconColor='white' onPress={navigation.goBack} /> : null}
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
    backgroundColor: '#000000',
  },
  title: {
    color: 'white',
  },
  logo: {
    width: 200,
    height: 60,
  },
})
