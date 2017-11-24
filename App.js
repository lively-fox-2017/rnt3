import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './redux/store';

import Welcome from './components/Welcome';
import Board from './components/Board';
import GameOver from './components/GameOver';



const RootNavigator = StackNavigator({
  Welcome: { screen: Welcome },
  Board: { screen: Board },
  GameOver: { screen: GameOver},
});

// export default (<Provider store={store}><RootNavigator/></Provider>);
export default RootNavigator

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
