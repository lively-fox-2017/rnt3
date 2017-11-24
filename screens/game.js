import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button, Dimensions, StyleSheet } from 'react-native'

import { SetBoard, GameFinish } from '../actions/game'

class Game extends React.Component {
  constructor () {
    super()
    this.state = {
      currentTurn: 'x'
    }
  }
  setBoard (index) {
    var newBoard = this.props.board
    newBoard[index[0]][index[1]] = this.state.currentTurn
    this.props.setBoard(newBoard)
    this.props.GameFinish()
    this.setState({
      currentTurn: (this.state.currentTurn === 'x' ? 'o' : 'x')
    })
  }
  isBoardFull (newBoard) {
    let stillEmpty = []
    for (let i=0;i<3;i++) {
      for (let j=0;j<3;j++) {
        if(newBoard[i][j] === '-') {
          stillEmpty.push('-')
        }
      }
    }
    if(stillEmpty.length === 0) {
      this.props.navigation.navigate('End')
    }
    if (this.props.winner) {
      console.log('winner', this.props.winner)
      this.props.navigation.navigate('End')
    }
  }
  render () {
    this.isBoardFull(this.props.board)
    return (
      <View style={styles.container}>
        <Text>Username: {this.props.user}</Text>
        <View style={styles.boardRow}>
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([0, 0])}
            title={this.props.board[0][0]}
            color="#000000"
          />
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([0, 1])}
            title={this.props.board[0][1]}
            color="#000000"
          />
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([0, 2])}
            title={this.props.board[0][2]}
            color="#000000"
          />
        </View>
        <View style={styles.boardRow}>
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([1, 0])}
            title={this.props.board[1][0]}
            color="#000000"
          />
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([1, 1])}
            title={this.props.board[1][1]}
            color="#000000"
          />
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([1, 2])}
            title={this.props.board[1][2]}
            color="#000000"
          />
        </View>
        <View style={styles.boardRow}>
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([2, 0])}
            title={this.props.board[2][0]}
            color="#000000"
          />
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([2, 1])}
            title={this.props.board[2][1]}
            color="#000000"
          />
          <Button
            style={styles.boardColumn}
            onPress={()=>this.setBoard([2, 2])}
            title={this.props.board[2][2]}
            color="#000000"
          />
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
    board: state.Game.board,
    winner: state.Game.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBoard: (newBoard) => dispatch(SetBoard(newBoard)),
    GameFinish: () => dispatch(GameFinish())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Game)
