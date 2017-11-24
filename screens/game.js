import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'

import { SetBoard } from '../actions/game'

class Game extends React.Component {
  setBoard (index) {
    console.log('set', index)
  }
  render () {
    return (
      <View style={styles.container}>
        <Text>Username: {this.props.user}</Text>
        <View style={styles.boardRow}>
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard(0)}
            title={this.props.board[0]}
            color="#000000"
          />
        </View>
        <View style={styles.boardRow}>
        </View>
        <View style={styles.boardRow}>
        </View>
      </View>
    )
  }
}

const fullWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  boardRow: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 5,
    borderTopWidth: 5,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    width: fullWidth
  },
  boardColumn: {
    fontSize: 30
  }
});

const mapStateToProps = (state) => {
  return {
    user: state.User.user,
    board: state.Game.board
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoard: (newBoard) => dispatch(SetBoard(newBoard))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
