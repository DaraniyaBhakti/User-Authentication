import React, { useState } from 'react'
import { Text, StyleSheet, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native'
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

export default OtpScreen = ({ navigation }) => {

  const [otp, setOtp] = useState();

  function handleOnChange() {

    if (!!otp && !isNaN(otp) && otp.trim().length === 6) {
      navigation.navigate('Home');
    } else {
      alert("Enter valid otp")
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.heading}>Verify</Text>
        <TextInputComponent
          placeholder="OTP"
          keyboardType="number-pad"
          value={otp}
          onChangeText={(text) => setOtp(text)} />
        <View style={{ marginTop: 100 }}>
          <ButtonComponent title="Login" onPress={handleOnChange} />
        </View>
      </View>

    </SafeAreaView>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  background: {
    width: '90%',
    backgroundColor: '#e2e2e9',
    elevation: 10,
    marginTop: '20%',
    padding: 30,
    alignSelf: 'center',

  },
  heading: {
    fontSize: 25,
    fontWeight: '800',
    marginBottom: 30,
    color: '#485196',
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    fontSize: 13,
    marginTop: 5,

  },
  textLabel: {
    color: '#485196',
    fontWeight: '600'
  }
})
