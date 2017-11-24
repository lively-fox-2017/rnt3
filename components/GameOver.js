import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

class GameOver extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Game Over</Text>
        <Text>You Win!</Text>
        <Button
          title="Play Again"
          color="#841584"
          />
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

export default GameOver;
