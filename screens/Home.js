import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Home extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Home Screen</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
        />
        <TouchableOpacity onPress={() => navigate('Play')}>
          <Text>Go To Play</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);