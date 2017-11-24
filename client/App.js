import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './helpers/Navigation'
import store from './store'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <Text> Welcome To Tic Tac To </Text>
      </View>
      </Provider>>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center'
  }
});
