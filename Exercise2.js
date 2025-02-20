import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';

const CV = () => {
  const openLink = url => {
    Linking.openURL(url).catch(err =>
      console.error('Failed to open link:', err),
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={require('./assets/erit.jpeg')}
        />
        <Text style={styles.name}>Aprillia Mononutu</Text>
        <Text style={styles.title}>Mobile App Developer</Text>
      </View>

      {/* About Me */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.sectionContent}>
          Halo! Nama saya Aprillia Erit Barlina Mononutu. Saya merupakan
          mahasiswa FILKOM, jurusan Informatika di Universitas Klabat. Hobi saya
          adalah berolahraga. Dan harapan saya adalah menjadi orang sukses, dan
          dapat menjadi berkat bagi banyak orang.
        </Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        <Text style={styles.sectionContent}>
          - Bendahara Komisi Pemuda GKL (2022 - 2026){'\n'}- Bendahara Karang
          Taruna Lembean (2023 - 2028)
        </Text>
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        <Text style={styles.sectionContent}>
          - SD Advent Unklab Airmadidi (2010 - 2016){'\n'}- SMP Advent Unklab
          Airmadidi (2016 - 2019){'\n'}- SMA Advent Unklab Airmadidi (2019 -
          2022)
        </Text>
      </View>

      {/* Contact */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Contact</Text>
        <Text style={styles.sectionContent}>
          Email: S22210430@student.unklab.ac.id {'\n'}
          Phone : 08229650
        </Text>
      </View>

      {/* Social Media Buttons */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Find Me On</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.instagramButton]}
            onPress={() =>
              openLink(
                'https://www.instagram.com/aprilliamononutu_/profilecard/?igsh=cG1xd3hsZDZsNWRw',
              )
            }>
            <Text style={styles.buttonText}>Instagram</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.githubButton]}
            onPress={() => openLink('https://github.com/piyaya06')}>
            <Text style={styles.buttonText}>GitHub</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  title: {
    fontSize: 18,
    color: '#666',
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instagramButton: {
    backgroundColor: '#E1306C', // Warna Instagram
  },
  githubButton: {
    backgroundColor: '#333', // Warna GitHub
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CV;
