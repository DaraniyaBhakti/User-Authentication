import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

export default ButtonComponent = (props) => {
  return (
    <View style={styles.button}>
      <TouchableOpacity onPress={props.onPress}>
        <Text style={styles.buttonText}>{props.title}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#485196',
    padding: 18,
    borderRadius: 5,
    width: '60%',
    alignSelf: 'center',

  },
  buttonText: {
    fontSize: 17,
    color: 'white',
    fontWeight: '600',
    textAlign: 'center'
  },
})