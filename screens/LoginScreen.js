import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button
} from 'react-native';
import {
  connect
} from 'react-redux';

import {
  changeUserName
} from '../actions/userActions';

import styles from '../styles';

const mapDispatchToProps = (dispatch) => {
  return {
    changeUserName: (name) => dispatch(changeUserName(name)),
  };
};

export class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Hello!',
    headerLeft: null,
    headerStyle: {
      marginTop: 25
    },
  }

  changeUserName(name) {
    this.props.changeUserName(name);
  }

  render() {
    console.log(this.props);
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.loginContainer}>
        <Text>Please enter your name</Text>
        <TextInput
          onChangeText={ (name) => this.changeUserName(name) }
          value={ this.props.name }
        />
        <Button
          onPress={ () => navigate('Play') }
          title="Play!"
          color="#2980b9"
        />
      </View>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
