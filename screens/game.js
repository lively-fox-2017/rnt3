import React from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

class Game extends React.Component {
  componentWillMount () {
    console.log('bububaba')
    console.log(this.props.user)
  }
  render () {
    return (
      <View>
        <Text>Ini Game Screen</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.User.user
  }
}

export default connect(mapStateToProps, null)(Game)
