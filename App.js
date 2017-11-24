import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Welcome from './components/Welcome';
import Board from './components/Board';
import GameOver from './components/GameOver';

export default class App extends React.Component {
  render() {
    return (
      <GameOver/>
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
