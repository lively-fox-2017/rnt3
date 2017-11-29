import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native';

import { connect } from 'react-redux'

import Circle from './Circle'
import Cross from './Cross'
import styles from './styles/gameBoard'
import { fetchState } from '../actions/index'

import {
    CENTER_POINTS,
    AREAS,
    CONDITIONS,
    GAME_RESULT_NO,
    GAME_RESULT_USER,
    GAME_RESULT_AI,
    GAME_RESULT_TIE
  } from '../constants/game'

export class GameScreen extends React.Component {
  constructor(props) {
      super()
      this.state = {
          AIInputs: [],
          userInputs: []
      }
  }

  AIAction() {
    const { userInputs, AIInputs } = this.state
    while(true) {
      const inputs = userInputs.concat(AIInputs)

      const randomNumber = Math.round(Math.random() * 8.3)
      if (inputs.every(d => d !== randomNumber)) {
        this.setState({ AIInputs: AIInputs.concat(randomNumber) })
        // this.judgeWinner()
        break
      }
    }
  }

  boardClickHandler(e) {
    //   alert('its working')
    const { locationX, locationY } = e.nativeEvent
    const { userInputs, AIInputs } = this.state
    const inputs = userInputs.concat(AIInputs)
    // alert(inputs)
    const area = AREAS.find(d =>
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY))

      if (area && inputs.every(d => d !== area.id)) {
        this.setState({ userInputs: userInputs.concat(area.id) }, () => {
        //   this.judgeWinner()
          this.AIAction()
        })
      }
  }

  judgeWinner() {
    const { userInputs, AIInputs } = this.state
    const { navigate } = this.props.navigation    
    const inputs = userInputs.concat(AIInputs)

    // if (inputs.length >= 5 ) {
    //   let res = this.isWinner(userInputs)
    //   if (res && result !== GAME_RESULT_USER) {
    //     return this.setState({ result: GAME_RESULT_USER })
    //   }
    //   res = this.isWinner(AIInputs)
    //   if (res && result !== GAME_RESULT_AI) {
    //     return this.setState({ result: GAME_RESULT_AI })
    //   }
    // }

    // if (inputs.length === 9 &&
    //     result === GAME_RESULT_NO && result !== GAME_RESULT_TIE) {
    //   this.setState({ result: GAME_RESULT_TIE })
    // }
    if(inputs.length === 9) {
        navigate('GameOver')
    }
  }

  async componentWillMount() {
      this.props.fetchState()
  }

  render() {
    const { navigate } = this.props.navigation
    const { userInputs, AIInputs } = this.state
    return (
      <View style={styles.container}>
        <Text>Tic Tac Toe.</Text>
        <TouchableWithoutFeedback onPress={e => this.boardClickHandler(e)}>
        <View style={styles.board}>
            <View
              style={styles.line}
            />
            <View
              style={[styles.line, {
                width: 3,
                height: 306,
                transform: [
                  {translateX: 200}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 100}
                ]
              }]}
            />
            <View
              style={[styles.line, {
                width: 306,
                height: 3,
                transform: [
                  {translateY: 200}
                ]
              }]}
            />
            {
              userInputs.map((d, i) => (
                <Circle
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                  color='deepskyblue'
                />
              ))
            }
            {
              AIInputs.map((d, i) => (
                <Cross
                  key={i}
                  xTranslate={CENTER_POINTS[d].x}
                  yTranslate={CENTER_POINTS[d].y}
                />
              ))
            }
        </View>
        </TouchableWithoutFeedback>
        <Button
        title="End Game"
        onPress={() => {navigate('GameOver')}}/>
      </View>
    );
  }
}

const maptDispatchToProps = (dispatch) => {
    return {
        fetchState: () => dispatch(fetchState())
    }
}

const maptStateToProps = (state) => {
    return {
        userInputs: state.userInputs,
        AIInputs: state.AIInputs
    }
}

var Connect = connect(
    maptStateToProps,maptDispatchToProps
)(GameScreen)

export default Connect
