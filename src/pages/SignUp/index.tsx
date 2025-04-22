import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TextInput from '../../components/molecules/TextInput';
import Button from '../../components/atoms/Button';
import Gap from '../../components/atoms/Gap';
import Header from '../../components/molecules/Header';

const Signup = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <View style={styles.profilContainer}>
          <View style={styles.profil}>
            <View style={styles.Add}>
              <Text style={styles.AddLabel}>Add Photo</Text>
            </View>
          </View>
        </View>
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type your full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email Address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          label="Continue"
          onPress={() => navigation.navigate('SignIn')}
        />
        <Gap height={12} />
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
  AIcon: {
    width: 24,
    height: 24,
  },
  profilContainer: {
    marginTop: 26,
    alignItems: 'center',
  },
  profil: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110,
    width: 110,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#8D92A3',
    borderStyle: 'dashed',
  },
  Add: {
    backgroundColor: '#F0F0F0',
    width: 90,
    height: 90,
    borderRadius: 100 / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  AddLabel: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    width: 40,
    textAlign: 'center',
  },
});
