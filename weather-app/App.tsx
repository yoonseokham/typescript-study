import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import * as Device from 'expo-device';
import * as Location from 'expo-location';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <AppBar />
      <View style={{ flex: 2 }}>
        <ScrollView pagingEnabled contentContainerStyle={styles.ScrollWeather}>
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
          <Weather />
        </ScrollView>
      </View>
      <Temperature />
    </View >
  );
};
const AppBar = () => {
  return <View style={styles.city}>
    <Text style={styles.cityName}>Seoul!</Text>
  </View>
};
const Weather = () => {
  return <View style={styles.weather}>
    <Text style={styles.currentTemperature}>27</Text>
    <Text style={styles.currentDescription}>Sunny</Text>
  </View>
}
const Temperature = () => {
  return <View style={styles.temperature}>
    <Text>Temperature</Text>
  </View>
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  cityName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  city: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  currentTemperature: {
    marginTop: 50,
    fontSize: 140,
    fontWeight: 'bold',
  },
  currentDescription: {
    marginTop: -10,
    fontSize: 20,
  },
  ScrollWeather: {
    backgroundColor: 'green',
  },
  weather: {
    height: windowHeight / 2,
    alignItems: 'center',
  },
  temperature: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'blue',
  },
});
export default App;