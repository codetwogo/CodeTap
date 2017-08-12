import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class SingleQuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.navigator.push({
            id: 'all-questions-component'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to the Single Question Component</Text>
                <Button
                    onPress={this.onPress}
                    title="Go Back"
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('SingleQuestionComponent', () => SingleQuestionComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
