import React from 'react';

import {
  View,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';

import styles from '../styles';

export default class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [],
      xos: []
    };
    this.generateBoard = this.generateBoard.bind(this);
    this.changeTile = this.changeTile.bind(this);
  }

  changeTile(index, type) {
    let xos = this.state.xos;
    xos[index] = type;
    this.setState({
      xos: xos,
    }, () => {
      this.generateBoard();
    });
  }

  generateBoard() {
    let board = [];

    for (let i = 0; i < 9; i++) {
      board.push(
        <TouchableOpacity
          key={ i }
          style={ styles.tiles }
          onPress={ () => this.changeTile(i, 'X') }
        >
          <Text style={ styles.xo }>{ this.state.xos[i] || '' }</Text>
        </TouchableOpacity>
      );
    }

    this.setState({
      board: board,
    });
  }

  componentWillMount() {
    this.generateBoard();
  }

  render() {
    return (
      <View style={ styles.board }>
        { this.state.board }
      </View>
    )
  }
}
