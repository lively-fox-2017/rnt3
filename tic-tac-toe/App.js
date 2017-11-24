import { StackNavigator } from 'react-navigation';

import Welcome from './components/Welcome';
import GameOver from './components/GameOver';
import PlayingField from './components/PlayingField';

const App = StackNavigator({
  Welcome: { screen: Welcome },
  PlayingField: { screen: PlayingField },
  GameOver: { screen: GameOver }
});

export default App;
