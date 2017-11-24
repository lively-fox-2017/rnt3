import React from 'react';
import {
  StackNavigator
} from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';

import LoginScreen from './screens/LoginScreen';
import PlayScreen from './screens/PlayScreen';
import GameOverScreen from './screens/GameOverScreen';

export const Navigator = StackNavigator({
  Login: { screen: LoginScreen },
  Play: { screen: PlayScreen },
  GameOver: { screen: GameOverScreen },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <Navigator />
      </Provider>
    );
  }
}
