import React, {Component} from 'react'
import {
  View,
  Text
} from 'react-native'


export default class Main extends Component {
  constructor() {
    super()
    this.state = {
      tictacto: []
    }
  }

  fetchTictacto () {
    this.setState({
      tictacto: [
        {"idx1": "x",
        "idx2": "o",
        "idx3": "x",
        "idx4": "o",
        "idx5": "x",
        "idx6": "o"}
      ]
    })
  }

  componentWillMount() {
    this.fetchTictacto()
  }

  render () {
    return (
      <View>
          {this.state.tictacto.map((data) => {
            {console.log(data.idx1)}
            return <View>
                    <Text>{data.idx1} {data.idx2} {data.idx3}</Text>
                    <Text>{data.idx4} {data.idx5} {data.idx6}</Text>
                  </View>
          })}
      </View>
    )
  }
}
