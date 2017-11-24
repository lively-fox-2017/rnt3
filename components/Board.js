import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [['i', 'i', 'i'],
              ['i', 'i', 'i'],
              ['i', 'i', 'i']],
    }
  }

  printBoard() {
    return this.state.board.map((row, indexR) => {

      return (
        row.map((i, indexC) => {return (<Text key={`${indexR} ${indexC}`} onPress={this.pressOnBox(`${indexR} ${indexC}`)}>{`| ${i} |`}</Text>)})
      );
    })
  }

  pressOnBox(id) {
    return () => {
      this.setState({
        board: this.state.board.map((row, indexR) => {
          return row.map((cont, indexC) => {
            if (`${indexR} ${indexC}` === id) {
              return 'o';
            }
            return cont;
          })
        })
      })
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.printBoard()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
});

export default Board;
