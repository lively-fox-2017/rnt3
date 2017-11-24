import React from 'react'
import { StackNavigator, addNavigationHelpers } from 'react-navigation'
import { connect } from 'react-redux'

import Welcome from '../screens/welcome'
import Game from '../screens/game'

export const RootNavigator = StackNavigator({
  Welcome: {
    screen: Welcome,
    navigationOptions: {
      headerTitle: 'Welcome Screen'
    }
  },
  Game: {
    screen: Game,
    navigationOptions: {
      headerTitle: 'Game Screen'
    }
  }
})

const Navigator = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = (state) => ({
  nav: state.nav
})

export default connect(mapStateToProps, null)(RootNavigator)
