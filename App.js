import React from 'react'
import { Provider } from 'react-redux'
import { StyleSheet, Text, View } from 'react-native'

import Routes from './src/routes'

export default class App extends React.Component {
  render() {
    return (
      <Routes />
    )
  }
}
