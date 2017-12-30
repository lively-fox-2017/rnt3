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
      userInput: [],
      computerInput: [],
      occupiedPosition: []
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

    let position = this.setPosition(locationX, locationY)
    this.handleUserInput(locationX, locationY, bgcolor, position)
      .then(() => this.handleComputerInput())
      .catch((err) => alert("Wrong Input"))
  }

  setPosition (locX, locY) {
    let pos = 0

    switch(locX) {
      case 15:
        if (locY === 15) {
          pos = 1
        } else if (locY === 115) {
          pos = 4
        } else {
          pos = 7
        }
        break;
      case 115:
        if (locY === 15) {
          pos = 2
        } else if (locY === 115) {
          pos = 5
        } else {
          pos = 8
        }
        break;
      default:
        if (locY === 15) {
          pos = 3
        } else if (locY === 115) {
          pos = 6
        } else {
          pos = 9
        }
    }

    return pos
  }

  handlePosition (player, pos) {
    let newOccupiedPosition = this.state.occupiedPosition.slice()
    newOccupiedPosition.push({player, pos})

    this.setState({
      occupiedPosition: newOccupiedPosition
    })

    // this.winningCondition()
  }

  handleUserInput(locX, locY, bgcol, position) {
    return new Promise((resolve, reject) => {
      // console.log(this.state.occupiedPosition)
      function findPosition(item) {
        return item.pos === position
      }

      if (this.state.occupiedPosition.findIndex(findPosition) !== -1) {
        reject()
      } else {
        this.handlePosition("user", position)

        let newUserInput = this.state.userInput.slice()
        newUserInput.push({
          locationX: locX,
          locationY: locY,
          bgcolor: bgcol
        })

        this.setState({
          userInput: newUserInput
        })

        resolve()
      }
    });
  }

  handleComputerInput() {
    let computerPos = Math.ceil(Math.random()*9)
    // console.log(computerPos);

    function findPosition(item) {
      return item.pos === computerPos
    }

    if (this.state.occupiedPosition.findIndex(findPosition) !== -1) {
      return this.handleComputerInput()
    } else {
      let locX = 0
      let locY = 0
      let bgcol = 'blue'
      switch(computerPos) {
        case 1:
          locX = 15; locY = 15; break;
        case 2:
          locX = 115; locY = 15; break;
        case 3:
          locX = 215; locY = 15; break;
        case 4:
          locX = 15; locY = 115; break;
        case 5:
          locX = 115; locY = 115; break;
        case 6:
          locX = 215; locY = 115; break;
        case 7:
          locX = 15; locY = 215; break;
        case 8:
          locX = 115; locY = 215; break;
        default:
          locX = 215; locY = 215;
      }

      let newComputerInput = this.state.computerInput.slice()
      newComputerInput.push({
        locationX: locX,
        locationY: locY,
        bgcolor: bgcol
      })

      this.setState({
        computerInput: newComputerInput
      })

      this.handlePosition("computer", computerPos)
    }
  }

  // winningCondition () {
  //   let filteredUserPos = occupiedPosition.filter((userPos) => {
  //     return userPos.player === "user"
  //   })
  //
  //   let filteredComPos = occupiedPosition.filter((comPos) => {
  //     return comPos.player === "computer"
  //   })
  //
  //   console.log("user", filteredUserPos);
  //   console.log("com", filteredUserPos);
  //
  //   // if (
  //   //   (filteredUserPos.indexOf(1) !== -1 && filteredUserPos.indexOf(2) !== -1 filteredUserPos.indexOf(3) !== -1) ||
  //   //   (filteredUserPos.indexOf(4) !== -1 && filteredUserPos.indexOf(5) !== -1 filteredUserPos.indexOf(6) !== -1) ||
  //   //   (filteredUserPos.indexOf(7) !== -1 && filteredUserPos.indexOf(8) !== -1 filteredUserPos.indexOf(9) !== -1) ||
  //   //   (filteredUserPos.indexOf(1) !== -1 && filteredUserPos.indexOf(5) !== -1 filteredUserPos.indexOf(9) !== -1) ||
  //   //   (filteredUserPos.indexOf(3) !== -1 && filteredUserPos.indexOf(5) !== -1 filteredUserPos.indexOf(7) !== -1)
  //   // ) {
  //   //   return alert("You Win!")
  //   // } else if (
  //   //   (filteredComPos.indexOf(1) !== -1 && filteredComPos.indexOf(2) !== -1 filteredComPos.indexOf(3) !== -1) ||
  //   //   (filteredComPos.indexOf(4) !== -1 && filteredComPos.indexOf(5) !== -1 filteredComPos.indexOf(6) !== -1) ||
  //   //   (filteredComPos.indexOf(7) !== -1 && filteredComPos.indexOf(8) !== -1 filteredComPos.indexOf(9) !== -1) ||
  //   //   (filteredComPos.indexOf(1) !== -1 && filteredComPos.indexOf(5) !== -1 filteredComPos.indexOf(9) !== -1) ||
  //   //   (filteredComPos.indexOf(3) !== -1 && filteredComPos.indexOf(5) !== -1 filteredComPos.indexOf(7) !== -1)
  //   // ){
  //   //   return alert("Computer Win!")
  //   // }
  // }

  render() {
    // console.log("USER =====>", this.state.userInput);
    // console.log("COMPUTER =====>", this.state.computerInput);
    // console.log("OCCUPIED =====>", this.state.occupiedPosition);
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
                  <Circle x={input.locationX} y={input.locationY} bgcolor={input.bgcolor} key={index}/>
                )
              })
            }
            {
              this.state.computerInput.map((comInput, index) => {
                return (
                  <Box x={comInput.locationX} y={comInput.locationY} bgcolor={comInput.bgcolor} key={index}/>
                )
              })
            }
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
