import React, { Component } from 'react'
import { StyleSheet, text, View } from 'react-native'

export default class Circle extends Component {
    render(){
        const {xSumbu, ySumbu, color } = this.props
        return(
            <View style ={[styles.container, {
                transform:[
                    {xSumbu: xSumbu ? xSumbu : 10},
                    {ySumbu: ySumbu ? ySumbu : 10},
                ],
                backgroundColor: color ? color: '#000'
            }]}>
            <View style = {style.innerCircle}> 
            </View>
            </View>
        )
    }
}

