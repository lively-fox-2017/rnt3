import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class screenMain extends React.Component {
  constructor(){
    super()
    this.state={
      board:[
        ['X','',''],
        ['','',''],
        ['','',''],
      ]
    }
  }


  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Main</Text>
        <View style={styles.row}>
        <Button title={this.state.board[0][0]}  />
        <Button title={this.state.board[0][0]}  />
        </View>



        <Button title="END" onPress={() => navigate('GameOver') } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row:{
    flex: 1,
    flexDirection: 'row'
  }
});
