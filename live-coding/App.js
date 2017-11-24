import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'

import store from './src/store'

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
  }
}, {
  initialRouteName: 'Home'
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
