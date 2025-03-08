//Exercise 3 - Sign In

//1. import core component react-native
import React from 'react';
import {
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

//2. Buat component
const SignIn = () => {
  return (
    //jsx
    <>
      <Text style={styles.title}>Welcome</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.username}>Username</Text>
        <TextInput style={styles.input} placeholder="Masukan username anda" />
        <Text style={styles.username}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Masukan password anda"
          secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </>
  );
};

//Styling
const styles = StyleSheet.create({
  title: {
    fontSize: 50,
    fontWeight: '800',
    color: 'black',
    padding: 10,
    margin: 10,
    textAlign: 'left',
  },
  username: {
    fontSize: 20,
    marginLeft: 20,
    fontWeight: '400',
    color: 'black',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 2,
    margin: 10,
    fontSize: 15,
    borderRadius: 10,
    padding: 10,
    color: 'black',
  },
  button: {
    backgroundColor: 'blue',
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
});

export default SignIn;
