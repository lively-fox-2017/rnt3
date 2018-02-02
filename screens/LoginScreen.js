import React from 'react';
import {
  Text,
  TextInput,
  View,
  Button,
  Alert,
} from 'react-native';
import {
  connect
} from 'react-redux';

import {
  changeUserName
} from '../actions/userActions';

import styles from '../styles';

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
  };
};

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
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Please enter your name</Text>
        <TextInput
          onChangeText={ (name) => this.changeUserName(name) }
          value={ this.props.name }
        />
        <Button
          onPress={
            () => {
              this.props.name.trim().length ?
              navigate('Play') :
              Alert.alert('Oops!', 'You need to input your name')
            }
          }
          title="Play!"
          color="#2980b9"
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);
