import React, { useState } from 'react'
import { Text, StyleSheet, View, SafeAreaView, TouchableOpacity } from 'react-native';
import TextInputComponent from '../components/TextInputComponent';
import ButtonComponent from '../components/ButtonComponent';


export default SignupScreen = ({ navigation }) => {

  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [mobile, setMobile] = useState()

  function handleOnChange() {
    let isValid = true;

    if (!name) {
      isValid = false;
    }

    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!email || !reg.test(email)) {
      isValid = false;
    }
    if (!mobile || isNaN(mobile) || (mobile.trim().length != 10) || ((mobile[0] != 6) && (mobile[0] != 7) && (mobile[0] != 8) && (mobile[0] != 9))) {
      isValid = false
    }

    if (isValid) {
      alert("Thank You!");
    } else {
      alert("Enter proper values");
    }

  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.background}>
        <Text style={styles.heading}>SIGN UP</Text>
        <TextInputComponent
          placeholder="Name"
          keyboardType="name-phone-pad"
          value={name}
          onChangeText={(text) => setName(text)} />
        <TextInputComponent
          placeholder="Mobile no."
          keyboardType="phone-pad"
          value={mobile}
          onChangeText={(text) => setMobile(text)} />
        <TextInputComponent
          placeholder="Email address"
          keyboardType="email-address"
          value={email}
          onChangeText={(text) => setEmail(text)} />
        <View style={{ marginTop: 100 }}>
          <ButtonComponent title="Sign Up" onPress={handleOnChange} />
          <Text style={styles.text}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.text, styles.textLabel]}>Login</Text>
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
