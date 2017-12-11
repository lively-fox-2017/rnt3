import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'

class Circle extends React.Component{
  render() {
    return (
      <View style={ [styles.container, {
        backgroundColor: this.props.bgcolor ? this.props.bgcolor: 'blue',
        transform: [
          {
            translateX: this.props.x ? this.props.x : 15
          },
          {
            translateY: this.props.y ? this.props.y : 15
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

export default Circle
