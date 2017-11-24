import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import Board from '../components/Board'

import styles from '../styles';

export default class PlayScreen extends React.Component {
  static navigationOptions = {
    title: 'Play!',
    headerLeft: null,
    headerStyle: {
      marginTop: 25,
    },
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Board/>
        <Button
          onPress={ () => navigate('GameOver') }
          title="Done!"
          color="#2980b9"
        />
      </View>
    );
  }
}
