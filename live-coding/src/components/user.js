import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

class User extends React.Component{
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={ styles.container }>
        <Text style={ styles.title }>Username</Text>
        <TextInput
          style={{height: 40, width: '100%'}}
          onChangeText={(text) => this.setState({username: text})}
          value={this.state.username} />
        <TouchableOpacity onPress={ () => navigate('Game', { user: this.state.username})}>
          <Text>Masuk</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    alignSelf: 'center'
  }
});

export default User
