import React, {Component} from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class Welcome extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          onPress={ () => navigate('Start') }
          title="start"
         />
        <Text>Selamat datang di permainan tictac to</Text>
      </View>
    )
  }
}
