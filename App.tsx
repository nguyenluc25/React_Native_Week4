import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Tiki from './components/tiki.ok';


export default function App() {

  const [count, setCount] = useState<number>(0);

  const [arr, setArr] = useState([1, 2, 3]);

  const handle = () => {
    let newArr = arr;
    newArr = newArr.map(item => item + 1);
    setArr(newArr);
  }

  return (
    // <View style={styles.container}>
    //   <View>
    //     <Button title="CLick" onPress={handle} />
    //   </View>
    //   <View>
    //     <Text>{JSON.stringify(arr)}</Text>
    //   </View>
    // </View>
    <Tiki />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
