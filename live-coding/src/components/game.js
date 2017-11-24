import React from 'react'
import { connect } from 'react-redux'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

class Game extends React.Component {
  componentWillMount() {
    this.props.dispatch(user(this.props.user))
  }

  render() {
    console.log(this.props);
    return (
      <View>
        <Text>hai</Text>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    player: state.userReducer.user
  }
}

const mapDispatchToProps = (dispatch) => ({
  user: (User) => dispatch(userAction(User)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Game)
