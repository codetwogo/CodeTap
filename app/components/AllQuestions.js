import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class AllQuestions extends Component {
    constructor(props){
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.navigator.push({
            id: 'homecomponent'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>ALL QUESTIONS SONNNN</Text>
                <Button
                    onPress={this.onPress}
                    title="Go back to base"
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('AllQuestions', () => AllQuestions);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});