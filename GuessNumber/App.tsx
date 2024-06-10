import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import { GetRandomNumber } from './api/random_number';

export default function App() {
  const [number, setNumber] = useState<number>(GetRandomNumber(1, 5));
  const [guess, setGuess] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text>Guess the number from 1~5</Text>
      <Text>{number}</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setGuess(parseInt(text))}
      />
      <Button
        title="Submit"
        onPress={() => {
          if (guess === number) {
            Alert.alert('Correct');
            setNumber(GetRandomNumber(1, 5));
          } else {
            Alert.alert('Wrong');
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    width: 50,
    borderColor: 'gray',
    borderWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
