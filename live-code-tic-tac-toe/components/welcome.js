import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';

// const GameOver = function (props) {
//     return (
//         <Text>Game Over</Text>
//     )
// }

class GameOver extends React.Component {
    constructor() {
        super()
    }

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>
                    Welcome
                </Text>
                <Button
                    onPress={() =>
                        navigate('Home', {})}
                title='Play'/>
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
});

export default GameOver