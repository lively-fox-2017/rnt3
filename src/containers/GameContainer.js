import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { initBoard, changeValue } from '../actions/BoardAction'

class GameContainer extends Component {

  constructor(props) {
    super(props)

    this.props.initBoard()
  }

  render() {
    return (
      <View style={styles.boardContainer}>
        <Text style={{fontSize: 20}}>Lets start the game!!!</Text>
        <View style={styles.row}>
          <Button title={(this.props.boardElement[0][0]) ? this.props.boardElement[0][0] : ''} onPress={() => this.props.changeValue(0, 0, this.props.boardElement)} />
          <Button title={(this.props.boardElement[0][1]) ? this.props.boardElement[0][1] : ''} onPress={() => this.props.changeValue(0, 1, this.props.boardElement)} />
          <Button title={(this.props.boardElement[0][2]) ? this.props.boardElement[0][2] : ''} onPress={() => this.props.changeValue(0, 2, this.props.boardElement)} />
        </View>
        <View style={styles.row}>
          <Button title={(this.props.boardElement[1][0]) ? this.props.boardElement[1][0] : ''} onPress={() => this.props.changeValue(1, 0,this.props.boardElement)} />
          <Button title={(this.props.boardElement[1][1]) ? this.props.boardElement[1][1] : ''} onPress={() => this.props.changeValue(1, 1, this.props.boardElement)} />
          <Button title={(this.props.boardElement[1][2]) ? this.props.boardElement[1][2] : ''} onPress={() => this.props.changeValue(1, 2, this.props.boardElement)} />
        </View>
        <View style={styles.row}>
          <Button title={this.props.boardElement[2][0] ? this.props.boardElement[2][0] : ''} onPress={() => this.props.changeValue(2, 0, this.props.boardElement)} />
          <Button title={this.props.boardElement[2][1] ? this.props.boardElement[2][1] : ''} onPress={() => this.props.changeValue(2, 1, this.props.boardElement)} />
          <Button title={this.props.boardElement[2][2] ? this.props.boardElement[2][2] : ''} onPress={() => this.props.changeValue(2, 1, this.props.boardElement)} />
        </View>
        <Button
          onPress={() => this.props.navigation.navigate('Result')}
          title="End the game"
          color="#841584"
          accessibilityLabel="Lets end this game!"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardContainer: {
    backgroundColor: '#afafaf',
    flexDirection: 'column'
  },
  row: {
    flexDirection: 'row'
  },
  square: {
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: 100,
    height: 100
  }
})

const mapStateToProps = (state) => ({
  boardElement: state.boardElement
});

const mapDispatchToProps = (dispatch) => ({
  initBoard: () => dispatch(initBoard()),
  changeValue: (row, col, value) => dispatch(changeValue(row, col, value))
});

// export default GameContainer
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
