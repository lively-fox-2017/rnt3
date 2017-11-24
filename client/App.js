import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Navigation from './helpers/Navigation'
import store from './store/index'
import { Provider } from 'react-redux'

export default class App extends React.Component {
  constructor () {
    super()
  }
  render() {
    return (
        <View style={styles.container}>
      <Provider store={store}>
        <Text> Welcome To Tic Tac To </Text>
        <Navigation/>
      </Provider>
      </View>
    )
  }
}
//
const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    justifyContent: 'center'
  }
});
