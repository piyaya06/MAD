import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card = ({avatar, firstName, lastName, email}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.userInfo}>
        <Text style={styles.name}>
          <Text style={styles.firstName}>{firstName}</Text> {lastName}
        </Text>
        <Text style={styles.email}>{email}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#a9a9a9',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  userInfo: {
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#000',
  },
  firstName: {
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#000',
  },
});

export default Card;
