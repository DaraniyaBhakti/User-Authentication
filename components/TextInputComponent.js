import React from "react";
import { View, StyleSheet, TextInput } from 'react-native';

export default TextInputComponent = (props) => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      keyboardType={props.keyboardType}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  )
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    marginVertical: 12,
    fontSize: 16,
    borderRadius: 4,
    borderColor: '#e9e9e9'
  },
})