import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

import { initBoard } from '../actions/BoardAction'

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
          <TextInput style={styles.square}  />
          <TextInput style={styles.square}  />
          <TextInput style={styles.square}  />
        </View>
        <View style={styles.row}>
          <TextInput style={styles.square}  />
          <TextInput style={styles.square}  />
          <TextInput style={styles.square}  />
        </View>
        <View style={styles.row}>
          <TextInput style={styles.square}  />
          <TextInput style={styles.square}  />
          <TextInput style={styles.square}  />
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
  initBoard: () => dispatch(initBoard())
});

// export default GameContainer
export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
