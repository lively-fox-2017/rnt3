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
        backgroundColor: this.props.bgcolor ? this.props.bgcolor: 'transparent',
        transform: [
          {
            translateX: this.props.x ? this.props.x : 10
          },
          {
            translateY: this.props.y ? this.props.y : 10
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
    borderRadius: 40
  },

  circle: {
    backgroundColor: 'white',
    width: 60,
    height: 60,
    borderRadius: 35
  }
})

export default Circle
