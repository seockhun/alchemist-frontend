import React from 'react';
import Singin from "./components/login/signin/index";
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <Singin />
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
