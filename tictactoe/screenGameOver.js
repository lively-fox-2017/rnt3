import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';

export default class screenGameOver extends React.Component {
  render() {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Text>Game Over</Text>
        <Button title="Start New Game" onPress={() => navigate('Home') } />

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
