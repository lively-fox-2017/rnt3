import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
       <Text>Tic Tac Toe</Text>
       <Button
         title="Play"
         color="#841584"/>
      </View>
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

export default Welcome;
