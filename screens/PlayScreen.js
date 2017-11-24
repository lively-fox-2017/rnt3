import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';
import { connect } from 'react-redux';

import Board from '../components/Board'
import styles from '../styles';

const mapStateToProps = (state) => {
  return {
    name: state.userReducer.name,
  };
};


export class PlayScreen extends React.Component {
  static navigationOptions = {
    title: 'Play!',
    headerLeft: null,
    headerStyle: {
      marginTop: 25,
    },
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>As: { this.props.name }</Text>
        <Board/>
        <Button
          onPress={ () => navigate('GameOver') }
          title="Done!"
          color="#2980b9"
        />
      </View>
    );
  }
}

export default connect(
  mapStateToProps
)(PlayScreen);
