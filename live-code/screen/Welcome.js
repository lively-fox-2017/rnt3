import React, {Component} from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native'
import t from 'tcomb-form-native';

const Form = t.form.Form;

const User = t.struct({
  email: t.String,
  username: t.String,
  password: t.String
});

export default class Welcome extends Component {
  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>welcome to game tictacto</Text>
        <Button
          onPress={ () => navigate('Start') }
          title="start"
         />
        <Form type={User} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
    backgroundColor: '#ffffff',
  },
})
