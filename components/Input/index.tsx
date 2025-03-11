import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';

const Input = ({label, placeholder, onChangeText, ...rest}) => {
  return (
    <View>
      <Text style={styles.username}>{label}</Text>
      <TextInput
        style={styles.inputName}
        placeholder={placeholder}
        onChangeText={onChangeText}
        {...rest}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  username: {
    fontSize: 17,
    marginLeft: 24,
    color: 'black',
    fontWeight: 'bold',
  },
  inputName: {
    borderWidth: 1,
    padding: 6,
    borderRadius: 6,
    borderColor: 'grey',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 30,
  },
});
