import React from 'react'
import { connect } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';
import { pushButton } from '../actions/index'

class ClassHome extends React.Component{
    constructor() {
        super()
        this.state ={
            gameStarted: false
        }
        
    }

    componentWillMount () {
        this.setState({
            gameStarted: true
        })
    }

    render () {
        return (
            <View style={styles.containerBoard}>
                <View style={styles.board}/>
                    <View 
                    style={styles.line} 
                    />
                <View
                    style={[styles.line, {
                        width: 3,
                        height: 306,
                        transform: [
                            { translateX: 200 }
                        ]
                    }]}
                />
                <View
                    style={[styles.line, {
                        height: 3,
                        width: 306,
                        transform: [
                            { translateY: 100 }
                        ]
                    }]}
                />
                <View
                    style={[styles.line, {
                        height: 3,
                        width: 306,
                        transform: [
                            { translateY: 200 }
                        ]
                    }]}
                />
                
                    <Text>Test Play Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerBoard: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    board: {
        width: 312,
        height: 312,
        borderWidth: 3,
        borderColor: '#000'
    },
    line: {
        position: 'absolute',
        width: 3,
        height: 306,
        backgroundColor: '#000',
        transform: [
            { translateX: 100 }
        ]
    }
});

const mapState = (state) => {
    console.log(JSON.stringify(state))
    return {
        gameArr: state.gameArr
    }
}

const mapActions = (dispatch) => {
    return {
        pushButton : (params) => dispatch(pushButton(params))
    }
}

export default ClassHome