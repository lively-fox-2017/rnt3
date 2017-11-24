import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RouterApp from './RouterApp'
import { Provider } from 'react-redux'
import store from './store'

export default class App extends React.Component {
  render() {
    return (
      // <View style={styles.container}>

        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text> */}
        <Provider store={store}>
          <RouterApp/>
        </Provider>
      // </View>
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
