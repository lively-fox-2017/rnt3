import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Player extends React.Component {
  static navigationOptions = {
    title: 'Player'
  };
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentWillMount () {

  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingVertical: 50,
  },
  pembungkus: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  kontainer: {
    flex: 1,
    flexDirection:'column',
  },
});
