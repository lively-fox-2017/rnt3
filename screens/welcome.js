import React from 'react'
import { connect } from 'react-redux'
import { SetUser } from '../actions/user'
import { View, TextInput, Button } from 'react-native'

class Welcome extends React.Component {
  constructor () {
    super()
    this.state = {
      username: ''
    }
  }
  handleSubmitUsername () {
    this.props.setUser(this.state.username)
    this.props.navigation.navigate('Game')
  }
  render () {
    console.log(this.props.user)
    const { navigate } = this.props.navigation
    return (
      <View>
        <TextInput
          style={{height: 40}}
          placeholder="Type your username"
          onChangeText={(text) => this.setState({username: text})}
        />
        <Button
          onPress={() => {this.handleSubmitUsername()}}
          title="Submit"
          color="#841584"
        />
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.User.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (username) => dispatch(SetUser(username))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Welcome)
