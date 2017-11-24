import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import { Provider } from 'react-redux'
import {connect} from 'react-redux'
import { history } from './store'
import store from './store/index'

import Home from './components/Home'
import Player from './components/Player'
import Finish from './components/Finish'


const SimpleApp = StackNavigator({
  Home: { screen: Home },
  Player: { screen: Player },
  Finish: { screen: Finish }
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <SimpleApp />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
