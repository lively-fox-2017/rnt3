import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class GamOver extends React.Component {
  constructor(props) {
      super()
  }

  render() {
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>GameOver.</Text>
        <Button
        title="Back to Welcome Screen"
        onPress={() => {navigate('Welcome')}}/>
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
