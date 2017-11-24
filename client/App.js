import React from 'react';
// import { StyleSheet, Text, View, TextInput } from 'react-native';
import RouterApp from './RouterApp'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RouterApp/>
      </Provider>
    );
  }
}
