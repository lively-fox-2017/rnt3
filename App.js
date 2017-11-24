import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './components/Welcome';
import Board from './components/Board';

export default class App extends React.Component {
  render() {
    return (
      <Board/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
