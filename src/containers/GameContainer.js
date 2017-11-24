import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native'

class GameContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Lets start the game!</Text>

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
})

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default GameContainer
// export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
