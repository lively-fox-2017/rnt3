import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'
import { connect } from 'react-redux'
import { nameChange } from '../actions/TicTacToe'

class HomeScreen extends Component{
  // constructor() {
  //
  // }
  render(){
    return(
      <View>
        <Text>Welcome</Text>
        <TextInput
         style={{height: 40, borderColor: 'gray', borderWidth: 1}}
         onChangeText={(text) => this.props.nameChange(text)}
         value={this.props.name}
        />
        <Button
          onPress={() => navigate('MainScreen')}
          title="Main Screen"
        />
      </View>
    )
  }
}

// export default HomeScreen

const mapStateToProps = (state) => {
  return {
    name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    nameChange: (name) => dispatch(nameChange(name))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
