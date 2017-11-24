import React, {Component} from 'react'
import {
  View,
  Text,
  Button
} from 'react-native'

export default class Start extends Component {
  render () {
    const { navigate } = this.props.navigation
    return (
      <View>
        <Button
          onPress={ () => navigate('Main') }
          title="Main"
         />
        <Text>
        ini start
        </Text>
      </View>
    )
  }
}
