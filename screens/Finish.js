import React from 'react';
import { connect } from 'react-redux';
import { Text, View, TouchableOpacity } from 'react-native';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

class Finish extends React.Component {
  render() {
    const {navigate} = this.props.navigation;
    return (
      <View>
        <Text>Finish Screen</Text>
        <TouchableOpacity onPress={() => navigate('Home')}>
          <Text>Go To Home</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Finish);