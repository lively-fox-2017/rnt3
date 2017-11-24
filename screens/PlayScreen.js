import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

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
        <Text>Play</Text>
        <Button
          onPress={ () => navigate('GameOver') }
          title="Done!"
          color="#2980b9"
        />
      </View>
    );
  }
}
