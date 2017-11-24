import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';

import HomeScreen from './screens/Home';
import PlayScreen from './screens/Play';
import FinishScreen from './screens/Finish';

const RootNavigator = StackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: 'Tic Tac Toe!'
    }
  },
  Play: {
    screen: PlayScreen,
    navigationOptions: {
      headerTitle: 'Let\'s Play!'
    }
  },
  Finish: {
    screen: FinishScreen,
    navigationOptions: {
      headerTitle: 'Game Over'
    }
  }
});

class App extends React.Component{
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}

export default App;
