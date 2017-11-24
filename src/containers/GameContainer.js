import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'

class GameContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardContainer: {
    backgroundColor: '#afafaf',
    flexDirection: 'column'
  },
  row: {
    flex: 5,
    flexDirection: 'row'
  },
  square: {
    height: 40,
    width: 40,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column'
  }
})

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default GameContainer
// export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
