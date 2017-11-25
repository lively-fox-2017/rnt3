import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import { userAction } from '../actions'
import Circle from './circle'

class Game extends React.Component {
  componentWillMount() {
    this.props.fetchUser(this.props.navigation.state.params.user)
  }

  render() {
    // console.log(this.props);
    const { player, board } = this.props
    return (
      <View>
        <Text>Play as { player }</Text>
        <View style={ styles.board }>
          <View style={ styles.line }>
          </View>

          <View style={ [styles.line, {
            transform: [
              {
                translateX: 200
              }
            ]
          }] }>
          </View>

          <View style={ [styles.line, {
            height: 3,
            width: 294,
            transform: [
              {
                translateY: 200
              }
            ]
          }] }>
          </View>

          <View style={ [styles.line, {
            height: 3,
            width: 294,
            transform: [
              {
                translateY: 100
              }
            ]
          }] }>
          </View>

          <Circle />
        </View>
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

  board: {
    borderWidth: 3,
    height: 300,
    width: 300,
    borderColor: 'red',
    alignSelf: 'center'
  },

  line: {
    height: 294,
    width: 3,
    position: 'absolute',
    borderWidth: 2,
    borderColor: 'red',
    transform: [
      {
        translateX: 100
      }
    ]
  }
})

const mapStateToProps = (state) => {
  return {
    player: state.userReducer.user,
    board: state.boardReducer.board
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (User) => dispatch(userAction(User)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
