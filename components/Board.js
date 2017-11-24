import React from 'react';
import { StyleSheet, Text, View, Button, TouchableWithoutFeedback } from 'react-native';

import Circle from './Circle'
import styles from './styles/gameBoard'

export default class GameScreen extends React.Component {
  constructor(props) {
      super()
      this.state = {
          AIInputs: [],
          userInputs: []
      }
  }

  AIAction() {
    const { userInputs, AIInputs, result } = this.state
    if (result !== -1) {
      return
    }
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
    const { locationX, locationY } = e.nativeEvent
    const { userInputs, AIInputs, result } = this.state
    if (result !== -1) {
      return
    }
    const inputs = userInputs.concat(AIInputs)

    const area = AREAS.find(d =>
      (locationX >= d.startX && locationX <= d.endX) &&
      (locationY >= d.startY && locationY <= d.endY))

      if (area && inputs.every(d => d !== area.id)) {
        this.setState({ userInputs: userInputs.concat(area.id) })
        setTimeout(() => {
          this.AIAction()
        }, 5)
      }
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
        </View>
        </TouchableWithoutFeedback>
        <Button
        title="End Game"
        onPress={() => {navigate('GameOver')}}/>
      </View>
    );
  }
}
