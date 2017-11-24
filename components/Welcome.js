import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class Welcome extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
       <Text>Tic Tac Toe</Text>
       <Button
         title="Play"
         color="#841584"
         onPress={() => {
           navigate('Board', { name: 'Jane' });
          }
          }
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
});

export default Welcome;
