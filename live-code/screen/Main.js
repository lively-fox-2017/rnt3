import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'
import { Table, Rows } from 'react-native-table-component'


export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      tictacto: []
    }
  }

  fetchTictacto () {
    // this.setState({
    //   tictacto: [
    //     {"idx1": "x",
    //     "idx2": "o",
    //     "idx3": "x",
    //     "idx4": "o",
    //     "idx5": "x",
    //     "idx6": "o"}
    //   ]
    // })
    this.setState({
      tictacto: [
        ['x', 'o', 'x'],
        ['o', 'x', 'o']
      ]
    })
  }

  componentWillMount() {
    this.fetchTictacto()
  }

  render () {
    return (
      <View>
          <Text> Board Tic Tac To </Text>
          <Table>
            <Rows data={this.state.tictacto} />
          </Table>
      </View>
    )
  }
}
