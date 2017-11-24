import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Welcome from './components/Welcome';
import Board from './components/Board';
import GameOver from './components/GameOver';

// export default class App extends React.Component {
//   render() {
//     return (
//       <Welcome/>
//     );
//   }
// }

const RootNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  Board: { screen: Board },
  GameOver: { screen: GameOver},
});

export default RootNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
