import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Box extends React.Component{
  render() {
    return (
      <View style={ [styles.container, {
        backgroundColor: this.props.bgcolor ? this.props.bgcolor: 'white',
        transform: [
          {
            translateX: this.props.x ? this.props.x : 115
          },
          {
            translateY: this.props.y ? this.props.y : 115
          }
        ]
      }]}>
        <View style={ styles.circle }>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    width: 70,
    height: 70,
  },

  circle: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
  }
})

export default Box
