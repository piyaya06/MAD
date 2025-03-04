/* eslint-disable prettier/prettier */
//Exercise 4 - halaman App

import {StyleSheet, View, Image} from 'react-native';
import React from 'react';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Atas */}
      <View style={styles.topContainer}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>

      {/* Logo unklab */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/logo_motto.png')}
          style={styles.logo}
        />
      </View>

      {/* Bagian Bawah */}
      <View style={styles.bottomContainer}>
        <View style={styles.blackContainer} />
        <View style={styles.yellowContainer} />
        <View style={styles.blackContainer} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    backgroundColor: 'red',
    width: '100%',
    height: 118,
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 18,
  },
  bottomContainer: {
    flexDirection: 'row',
    backgroundColor: 'blue',
    width: '100%',
    height: 118,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  blackContainer: {
    backgroundColor: 'black',
    width: 73,
    height: 73,
  },
  yellowContainer: {
    backgroundColor: 'yellow',
    width: 73,
    height: 73,
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 50,
  },
  logo: {
    width: 400,
    height: 190,
    resizeMode: 'contain',
  },
});
