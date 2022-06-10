import React from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Thanks! </Text>
      <Text style={styles.text}>You Logged In</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    color: '#485196',
    fontWeight: '500'
  },
  text: {
    fontSize: 20
  }
})
