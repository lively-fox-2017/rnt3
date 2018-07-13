import React from 'react';
import { StyleSheet, Text, View , Button} from 'react-native';


export default class screenWelcome extends React.Component {
  render(props) {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
      <Text>Welcome</Text>

        <Button title="START" onPress={() => navigate('Main') } />

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
