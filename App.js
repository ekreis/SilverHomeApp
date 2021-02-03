import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from './components/screens/HomeScreen';
import UserInfoScreen from './components/screens/UserInfoScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <UserInfoScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
