/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Title from './components/Title/index';
import Input from './components/Input/index';
import Button from './components/Button/index';

const SignIn = () => {
  const [username, setUsername] = useState(' ');
  const [password, setPassword] = useState(' ');

  const onSubmit = () => {
    console.log('Test');
    console.log(username, password);
  };

  return (
    <View>
      <Title label="Welcome!" />
      <Input
        label="Username"
        placeholder="Masukkan Username anda"
        onChangeText={e => setUsername(e)}
      />
      <Input
        label="Password"
        placeholder="Masukkan Password anda"
        onChangeText={e => setPassword(e)}
        secureTextEntry={true}
      />
      <Button label="Sign In" color="orange" onPress={onSubmit} />
      <Button label="Sign In With Google" color="red" />
      <Button label="Sign In With Facebook" color="blue" />
      <Button label="Sign In With Apple" color="black" />
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

//  {/* divider OR
//   <View style={styles.dividerContainer}>
//     <View style={styles.dividerLine} />
//     <Text style={styles.dividerText}>OR</Text>
//     <View style={styles.dividerLine} />
//   </View>
//   <Button label="Sign In With Google" color="red" />
//   <Button label="Sign In With Facebook" color="blue" />
//   <Button label="Sign In With Apple" color="black" /> */}

// dividerLine: {
//   flex: 1,
//   height: 1,
//   backgroundColor: '#D3D3D3',
// },
// dividerText: {
//   marginHorizontal: 10,
//   color: '#808080',
//   fontWeight: '500',
//},
