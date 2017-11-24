import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'

import { ResetBoard } from '../actions/game'

class End extends React.Component {
  render () {
    return (
      <View>
        <Text>Winner {this.props.winner}</Text>
        <Button
          title='Replay?'
          color="black"
          onPress={() =>
            this.replayGame()
          }
        />
      </View>
    )
  }
  replayGame () {
    this.props.resetBoard()
    const { navigate } = this.props.navigation
    navigate('Game')

  }
}

const mapStateToProps = (state) => {
  return {
    winner: state.Game.winner
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetBoard: () => dispatch(ResetBoard())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(End)
