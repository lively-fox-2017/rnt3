import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

import { setPlayerName } from './../actions/TictactoeActions';

const mapStateToProps = (state) => ({
  playerName: state.TictactoeReducer.playerName
});

const mapDispatchToProps = (dispatch) => ({
  setPlayerName: (name) => dispatch(setPlayerName(name))
});

class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Player Name</Text>
        <TextInput
          style={{height: 30, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(playerName) => this.props.setPlayerName(playerName)}
          value={this.props.playerName}
        />
        <TouchableOpacity style={styles.button} onPress={() => navigate('Play')}>
          <Text style={styles.buttonText}>Go To Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A61646',
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: 32
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FAFAFA',
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);