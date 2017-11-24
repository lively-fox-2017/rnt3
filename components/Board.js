import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import actions from '../redux/actions';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [['i', 'i', 'i'],
              ['i', 'i', 'i'],
              ['i', 'i', 'i']],
    }
    // this.props.initBoard();
  }

  printBoard() {
    return this.state.board.map((row, indexR) => {

      return (
        <View style={styles.row}>
          {row.map((i, indexC) => {return (<Text key={`${indexR} ${indexC}`} onPress={this.pressOnBox(`${indexR} ${indexC}`)}>{`| ${i} |`}</Text>)})}
        </View>
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
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  row: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
});

function mapStateToProps(state) {
  return {
    board: state.reducer.board,
  };
}

function mapActionToProps(dispatch) {
  return {
    initBoard: () => {
      dispatch(actions.initBoard())
    },
  };
}

export default Board
// export default connect(null, null)(Board);
