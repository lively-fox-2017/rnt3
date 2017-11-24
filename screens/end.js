import React from 'react'
import { connect } from 'react-redux'
import { View, Text, Button } from 'react-native'

import { ResetBoard } from '../actions/game'

class End extends React.Component {
  render () {
    return (
      <View>
        {
          (this.props.winner === '' && <Text>Draw</Text>)
        }
        {
          (this.props.winner === 'x' && <Text>Winner X</Text>)
        }
        {
          (this.props.winner === 'o' && <Text>Winner O</Text>)
        }
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
    const { goBack } = this.props.navigation
    goBack()
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
