import React from 'react'
import { View, Text } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Board from '../component/Board'


const RootNavigator = StackNavigator ({
  home : {
    screen: Board,
    navigationOptions: {
      headerTitle: 'Board'
    }
  }
})


export default RootNavigator
