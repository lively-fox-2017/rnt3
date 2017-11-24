import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Play extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Play Screen</Text>
        <TouchableOpacity onPress={() => navigate('Finish')}>
          <Text>Go To Finish</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Play);