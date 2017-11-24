import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native';
import {
  StackNavigator
} from 'react-navigation';
import store from './store/index'

//components
import Welcome from './components/welcome';
import Home from './components/home'
import GameOver from './components/end'

const DefineRouter = StackNavigator({
  Welcome: { screen: Welcome },
  Home: { screen: Home },
  GameOver: { screen: GameOver}
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store ={store}>
        <DefineRouter/>
      </Provider>
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
