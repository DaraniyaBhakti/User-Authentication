import React, { useState } from 'react'
import { Text, StyleSheet, View,SafeAreaView, TouchableOpacity } from 'react-native'
import ButtonComponent from '../components/ButtonComponent';
import TextInputComponent from '../components/TextInputComponent';

export default LoginScreen = ({ navigation }) => {

  const [mobile, setMobile] = useState();


  function handleOnChange() {

    if (!!mobile && !isNaN(mobile) && mobile.trim().length === 10) {
      if (mobile[0] == 6 || mobile[0] == 7 || mobile[0] == 8 || mobile[0] == 9) {
        navigation.navigate('Otp');
      }
      else {
        alert("Enter proper mobile no.")
      }
    } else {
      alert("Enter proper mobile no.")
    }


  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.heading}>LOGIN</Text>
        <TextInputComponent
          placeholder="Mobile no."
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={(text) => setMobile(text)}
        />
        <View style={{ marginTop: 100 }}>
          <ButtonComponent
            title="Continue"
            onPress={handleOnChange}
          />
          <Text style={styles.text}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={[styles.text, styles.textLabel]}>Sign Up</Text>
          </TouchableOpacity>

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
