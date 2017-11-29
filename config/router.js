import React from 'react'
import { StackNavigator } from 'react-navigation'

import Welcome from '../components/Welcome'
import Game from '../components/Board'
import GameOver from '../components/GameOver'

const Stack = StackNavigator({
    Welcome: {
        screen: Welcome
    },
    GameScreen: {
        screen: Game
    },
    GameOver: {
        screen: GameOver
    }
})

export default () => <Stack/>