import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Image, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      nama: 'Masukan Nama Anda'
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
        style={{height: 40, paddingHorizontal: 50,}}
        onChangeText={(nama) => this.setState({nama})}
        value={this.state.nama}
        />

        <Button
        onPress={() => {
          if (this.state.nama === "Masukan Nama Anda" || this.state.nama === "") {

          } else {
            navigate('Player', {nama: this.state.nama})

          }
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
