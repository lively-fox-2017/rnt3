import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, TextInput } from 'react-native'

class WelcomeContainer extends Component {

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize: 20}}>Welcome to tic-tac-toe</Text>
        <Text>Please Provide your name to continue</Text>
        <TextInput style={{height: 20}} placeholder="Type your name here"></TextInput>
      </View>
    )
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

export default WelcomeContainer
// export default connect(mapStateToProps, mapDispatchToProps)(WelcomeContainer);
