import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Filter } from '../components/Filter'

import { Header } from '../components/Header'

export const Home = () => {
  return (
    <View style={styles.bg}>
      <Header />
      <View style={styles.container}>
        <Filter />
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  bg: {
    backgroundColor: 'rgb(18, 18, 18);',
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 10,
  },
})
