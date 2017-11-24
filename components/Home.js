import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pesan: 'Masukan Nama Anda'
    }
  }

  componentWillMount () {

  }

  render() {
    const { navigate } = this.props.navigation;
    // alert(JSON.stringify(this.props.navigation))
    return (
      <View style={styles.container}>
        <Text style={{paddingVertical: 50}}></Text>
        <TextInput
        style={{height: 40}}
        onChangeText={(pesan) => this.setState({pesan})}
        value={this.state.pesan}
        />

        <Button
        onPress={() => {
          console.log('satu')
        }}
        title="Masuk Permainan"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
});
