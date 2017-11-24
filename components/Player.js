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
    // this.props.randomXO()
    this.acak()
  }

  acak () {
    let XO = ['X','O']
    let arr = [];
    let counterX = 0;
    let counterO = 0;
    let mid = Math.floor((3*3)/2)

    for (var i = 0; i < 3; i++) {
      for (var j = 0; j < 3; j++) {
        var random = XO[Math.floor(Math.random()*2)];
        if(random == 'X'){
          if(counterX==mid){
            arr.push('O')
            counterO++
          }
          else{
            arr.push('X');
            counterX++
          }
        }
        else{
          if(counterO==mid){
            arr.push('X')
            counterX++
          }
          else{
            arr.push('O');
            counterO++
          }
        }
      }
    }


    console.log('mana', arr)
  }

  render() {
    // console.log(this.props.randomxonya)
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
