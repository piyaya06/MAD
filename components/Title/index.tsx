import React from 'react';
import {StyleSheet, Text} from 'react-native';

const Title = ({label}) => {
  return <Text style={styles.title}>{label}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 45,
    color: 'black',
    marginTop: 7,
    marginBottom: 30,
    marginLeft: 16,
  },
});
