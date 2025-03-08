import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({label, color = 'blue'}) => {
  return (
    <View>
      <View>
        <TouchableOpacity style={styles.button(color)} activeOpacity={(0, 5)}>
          <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: color => ({
    padding: 10,
    margin: 5,
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: color,
    borderRadius: 6,
  }),
  buttonText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});
