import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import screenWelcome from './screenWelcome'
import screenMain from './screenMain'
import screenGameOver from './screenGameOver'


export default class App extends React.Component {
  render() {
    return (
      <AppNav/>
    );
  }
}

const AppNav = StackNavigator({
  Home: {
    screen: screenWelcome,
    navigationOptions: {
      headerTitle: 'Welcome',
    },
  },
  Main: {
    screen: screenMain,
    navigationOptions: {
      headerTitle: 'Tic Tac Toe',
    },
  },
  GameOver: {
    screen: screenGameOver,
    navigationOptions: {
      headerTitle: 'Game Over',
    },
  }
},
{
    index: 0,
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false
    }
  }
);
