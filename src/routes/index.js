import { StackNavigator } from 'react-navigation'

import WelcomeContainer from '../containers/WelcomeContainer'
import GameContainer from '../containers/GameContainer'
import ResultContainer from '../containers/ResultContainer'

export default StackNavigator({
  Welcome: {
    screen: WelcomeContainer
  },
  Game: {
    screen: GameContainer
  },
  Result: {
    screen: ResultContainer
  }
})
