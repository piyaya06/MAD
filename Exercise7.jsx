import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Exercise7 = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('https://reqres.in/api/users?per_page=12')
      .then(res => setUsers(res.data.data)) // Fetch the user data
      .catch(error => console.error('Error fetching data:', error)); // Error handling
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User List</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {users.map(item => (
          <View key={item.id} style={styles.card}>
            <Image source={{uri: item.avatar}} style={styles.avatar} />
            <View style={styles.userInfo}>
              <Text style={styles.name}>
                {item.first_name} {item.last_name}
              </Text>
              <Text style={styles.email}>{item.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes up the full screen
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  scrollViewContent: {
    paddingBottom: 20, // Add padding at the bottom to avoid clipping content
  },
  card: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
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
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: '#555',
  },
});

export default Exercise7;
