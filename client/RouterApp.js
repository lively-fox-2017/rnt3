import React from 'react'
import { StackNavigator } from 'react-navigation'

import MainScreen from './components/MainScreen.js'
import HomeScreen from './components/HomeScreen.js'

const RouterApp = StackNavigator({
  HomeScreen: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
          title: `Welcome`
      }),
  },
  MainScreen: {
      screen: MainScreen,
      navigationOptions: ({navigation}) => ({
          title: `Welcome`
      }),
  },
  // GameOverScreen: {
  //   screen: GameOverScreen,
  //   navitaionOptions: ({navigation}) => {
  //     title: `Game Over`
  //   }
  // }
})

export default RouterApp
