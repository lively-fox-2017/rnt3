import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, TextInput } from 'react-native';

import { setBoardValue } from './../actions/TictactoeActions';

const mapStateToProps = (state) => ({
  playerName: state.TictactoeReducer.playerName,
  playerChar: state.TictactoeReducer.playerChar,
  opponentChar: state.TictactoeReducer.opponentChar,
  board: state.TictactoeReducer.board
});

const mapDispatchToProps = (dispatch) => ({
  setBoardValue: (val, rowIdx, boxIdx) => dispatch(setBoardValue(val, rowIdx, boxIdx))
});

class Play extends React.Component {
  _opponentTurn() {
    const turn = () => {
      const randomRowIdx = Math.round(Math.random() * 2);
      const randomBoxIdx = Math.round(Math.random() * 2);

      if (this.props.board[randomRowIdx][randomBoxIdx] === null) {
        return [randomRowIdx, randomBoxIdx];
      } else {
        turn();
      }
    }
    
    const idx = turn();
    this.props.setBoardValue(this.props.oppponentChar, idx[0], idx[1]);
    this.forceUpdate();
  }

  render() {
    const {navigate} = this.props.navigation;

    const drawRow = (row, rowIdx) => {
      return row.map((box, idx) => {
        if (box === 'x') {
          return <View style={styles.box} key={idx}><Text>X</Text></View>
        } else if (box === 'o') {
          return <View style={styles.box} key={idx}><Text>O</Text></View>
        } else {
          return (
              <TouchableOpacity
                key={idx}
                style={styles.box}
                onPress={(val) => {
                  this.props.setBoardValue(this.props.playerChar, rowIdx, idx)
                  this.forceUpdate();
                }}
              >
              </TouchableOpacity>
          )
        }
      });
    };

    const drawBoard = (board) => {
      return board.map((row, idx) => {
        return <View style={styles.row} key={idx}>{drawRow(row, idx)}</View>
      });
    };

    return (
      <View>
        <Text>Play Screen {this.props.playerName}</Text>
        <View style={styles.board}>
          {drawBoard(this.props.board)}
        </View>
      </View>
    );
  }
}

const fullwidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  board: {
    width: fullwidth,
    height: fullwidth,
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row'
  },
  box: {
    width: 96,
    height: 96,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'gray',
    borderWidth: 1
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Play);