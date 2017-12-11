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
import Box from './box'

class Game extends React.Component {
  constructor() {
    super()
    this.state = {
      // coordinate: {
      //   x: '',
      //   y: '',
      //   bgcolor: ''
      // },
      userInput: []
    }
  }

  componentWillMount() {
    this.props.fetchUser(this.props.navigation.state.params.user)
  }

  handleInput(e) {
    // console.log(e.nativeEvent)
    const bgcolor = 'red'
    const eventLocationX = e.nativeEvent.locationX-25
    const eventLocationY = e.nativeEvent.locationY-25
    let locationX = 0
    let locationY = 0

    if (eventLocationX < 90) {
      locationX = 15
    } else if (eventLocationX < 190) {
      locationX = 115
    } else {
      locationX = 215
    }

    if (eventLocationY < 90) {
      locationY = 15
    } else if (eventLocationY < 190) {
      locationY = 115
    } else {
      locationY = 215
    }

    this.handleUserInput(locationX, locationY, bgcolor)

    // this.setState({
    //   coordinate: {
    //     x: locationX,
    //     y: locationY,
    //     bgcolor: bgcolor
    //   }
    // })
  }

  handleUserInput(locX, locY, bgcol) {
    let newUserInput = this.state.userInput.slice()
    newUserInput.push({
      locationX: locX,
      locationY: locY,
      bgcolor: bgcol
    })

    this.setState({
      userInput: newUserInput
    })
  }

  render() {
    // console.log(this.props);
    const { player, board } = this.props
    return (
      <View style={styles.container}>
        <Text>Play as { player }</Text>
        <TouchableOpacity onPress={ (e) => this.handleInput(e) }>
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

            { this.state.userInput.map((input, index) => {
              return (
                <Circle x={input.locationX} y={input.locationY} bgcolor={input.bgcolor} />
              )
            }) }
            <Box/>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  board: {
    borderWidth: 3,
    height: 300,
    width: 300,
    borderColor: 'red',
    backgroundColor: 'white',
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
