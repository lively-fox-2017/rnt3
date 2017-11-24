import React, {Component} from 'react'
import {
  AppRegistry,
} from 'react-native'
import { StackNavigator } from 'react-navigation'

import Welcome from '../screen/Welcome'
import Start from '../screen/Start'
import Main from '../screen/Main'

export const Navbar = StackNavigator ({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerTitle: 'Welcome'
    }
  },
  Start: {
    screen: Start,
    navigationOptions: {
      headerTitle: 'Start'
    }
  },
  Main: {
    screen: Main,
    navigationOptions: {
      headerTitle: 'Main game'
    }
  }
})

AppRegistry.registerComponent('Navigasi', () => Navigasi)
