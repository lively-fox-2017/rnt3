import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class End extends React.Component {
  render () {
    return (
      <View>
        <Text>Ini End Screen</Text>
      </View>
    )
  }
}

export default connect(null, null)(End)
