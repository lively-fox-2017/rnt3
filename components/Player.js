import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

import {randomXO} from '../actions/index'
import {connect} from 'react-redux'

class Player extends React.Component {
  static navigationOptions = {
    title: 'Player'
  };
  constructor(props) {
    super(props)
    this.state = {
      nama: this.props.navigation.state.params.nama
    }
  }

  componentWillMount () {
    this.props.randomXO()
  }

  render() {
    console.log(this.props.randomxonya)
    return (
      <View style={styles.container}>
        <Text style={{paddingVertical: 10, paddingHorizontal: 10,}}>Selamat Datang : {this.state.nama}</Text>

      </View>
    );
  }

}

const mapState = state => {
  return {
    randomxonya: state.random.randomxonya
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    randomXO: () => dispatch(randomXO()),
  }
}

const styles = StyleSheet.create({
});

const player = connect(
  mapState,
  mapDispatchToProps
)(Player)

export default player;
