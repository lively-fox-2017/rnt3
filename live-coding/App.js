import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import store from './src/store'
import userScreen from './src/components/user'
import gameScreen from './src/components/game'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <AppNav />
      </Provider>
    );
  }
}

const AppNav = StackNavigator({
  Home: {
    screen: userScreen,
    navigationOptions: {
      'headerTitle': 'Welcome'
    }
  },

  Game: {
    screen: gameScreen,
    navigationOptions: {
      'headerTitle': 'Tictactoe Board'
    }
  }
}, {
  initialRouteName: 'Home'
})
