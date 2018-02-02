import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import styles from '../styles';

export default class GameOverScreen extends React.Component {
  static navigationOptions = {
    title: 'Game Over!',
    headerLeft: null,
    headerStyle: {
      marginTop: 25
    },
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>The winner is foo</Text>
        <Button
          onPress={ () => navigate('Play') }
          title="Play again!"
          color="#2980b9"
        />
      </View>
    );
  }
}
