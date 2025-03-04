/* eslint-disable prettier/prettier */
import {StyleSheet, View} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.redContainer}></View>
        <View style={styles.greenContainer}></View>
        <View style={styles.blueContainer}></View>
      </View>
    </>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', //utk xy axis//row//column//row-reverse//column-reverse
    justifyContent: 'space-evenly', //utk main axis//flex-start//flex-end//center//space-between//space-around//space-evenly
    alignItems: 'center', //cross axis
  },
  redContainer: {
    backgroundColor: 'red',
    height: 100,
    width: 100,
  },
  greenContainer: {
    backgroundColor: 'green',
    height: 100,
    width: 100,
  },
  blueContainer: {
    backgroundColor: 'blue',
    height: 100,
    width: 100,
  },
});
