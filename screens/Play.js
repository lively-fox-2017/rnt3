import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

const mapStateToProps = (state) => ({
  playerName: state.TictactoeReducer.playerName,
  board: state.TictactoeReducer.board
});

const mapDispatchToProps = (dispatch) => ({

});

class Play extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    const board = () => {
      this.props.board()
    };

    return (
      <View>
        <Text>Play Screen {this.props.playerName}</Text>
        <TouchableOpacity onPress={() => navigate('Finish')}>
          <Text>Go To Finish</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);