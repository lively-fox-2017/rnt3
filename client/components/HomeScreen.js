import React, {Component} from 'react'
import {StyleSheet, Text, View, TextInput, Button} from 'react-native'

class HomeScreen extends Component{
  // constructor() {
  //
  // }
  render(){
    return(
      <View>
        <Text>Welcom</Text>
        {/* <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value=''
        /> */}
        <Button
          onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    )
  }
}
export default HomeScreen
