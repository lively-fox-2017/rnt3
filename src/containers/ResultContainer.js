import React, { Component } from 'react'
import { connect } from 'react-redux'\
import { StyleSheet, Text, View } from 'react-native'

class ResultContainer extends Component {

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

export default ResultContainer
// export default connect(mapStateToProps, mapDispatchToProps)(ResultContainer);
