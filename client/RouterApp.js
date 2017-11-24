import React from 'react'
import { StagNavigator } from 'react-navigation'

import MainScreen from '../components/MainScreen'

const RouterApp = StactNavigator({
  MainScreen: {
    screen: MainScreen,
    navigationOptions: ({navigation}) => {
      title: `Welcome to tic tac toe`
    }
  },
  GameOverScreen: {
    screen: GameOverScreen,
    navitaionOptions: ({navigation}) => {
      title: `Game Over`
    }
  }
})
