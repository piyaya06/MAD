import {StyleSheet, Text, View} from 'react-native'; //react  native itu library yg kita install

//Menggunakan function = ARROW FUNCTION
//fungsi ini adalah sebuah komponen
//Commponent adalah function  yang mengembalikan  JSX
const App = () => {
  return (
    //JSX (bukan HTML)
    <View>
      <View style={styles.container}>
        <Text style={styles.title}> Basic React Native </Text>
      </View>
      <View style={styles2.container2}>
        <Text style={styles2.title2}> Core Components in React Native</Text>
      </View>
    </View>
  );
};

//export component
export default App; //nama fungsi yg di export

//styling
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 3,
    padding: 20,
    margin: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

const styles2 = StyleSheet.create({
  container2: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 3,
    padding: 5,
    margin: 10,
  },
  title2: {
    fontSize: 20,
    fontWeight: '800',
    color: '#000',
    textAlign: 'center',
  },
});
