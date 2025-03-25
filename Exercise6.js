//Exercise 6

/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './components/Title/index';
import Input from './components/Input/index';
import Button from './components/Button/index';

const SignIn = () => {
  const [name, setName] = useState(' ');
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState(' ');
  const [email, setEmail] = useState(' ');
  const [address, setAddress] = useState(' ');
  const [phonenumber, setPhoneNumber] = useState(' ');

  const onSubmit = () => {
    console.log(
      '\nName: ' +
        name +
        '\nUsername: ' +
        username +
        '\nPassword: ' +
        password +
        '\nEmail: ' +
        email +
        '\nAddress: ' +
        address +
        '\nPhone Number: ' +
        phonenumber,
    );
  };

  return (
    <View>
      <Title label="Registration" />
      <Input
        label="Name"
        placeholder="Masukkan Nama lengkap anda"
        onChangeText={e => setName(e)}
      />
      <Input
        label="Username"
        placeholder="Masukkan Username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Email"
        placeholder="Masukkan Email anda"
        onChangeText={e => setEmail(e)}
      />
      <Input
        label="Password"
        placeholder="Masukkan Password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Input
        label="Address"
        placeholder="Masukkan Alamat anda"
        onChangeText={e => setAddress(e)}
      />
      <Input
        label="Phone Number"
        placeholder="Masukkan Nomor Telpon anda"
        onChangeText={e => setPhoneNumber(e.replace(/[^0-9]/g, ''))}
        value={phonenumber}
        keyboardType="numeric"
      />
      <Button label="Register" color="purple" onPress={onSubmit} />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 20,
  },
});
