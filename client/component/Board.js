import React, { Component } from 'React'
import { Text, View, TouchableOpacity } from 'react-native'
import store from '../store'
import setBoard from '../actions/Tictactoe'
import loadBoard from '../actions/Tictactoe'
import { connect } from 'react-redux'

export default class Board extends Component {
  componentWillMount () {
    this.props.loadBoard
  }

  render () {
    return (
      <View>
        <Text>{JSON.stringify(this.props.board)}</Text>
      </View>
    )
  }
}

const function mapStateToProps(state) {
  return {
    board: state.board
  }
}

const function mapDispatchToProps(dispatch) {
  return {
    setBoard: (board) => {
      return dispatch(setBoard())
    },
    loadBoard: () => {
      return dispatch(loadBoard())
    }
  }
}


const boardConnect = connect (
  mapStateToProps,
  mapDispatchToProps
)(Board)
export default boardConnect
