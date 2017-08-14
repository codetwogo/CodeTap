import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class SingleQuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
        this.onPress2 = this.onPress2.bind(this);
    }

    onPress() {
        this.props.navigator.push({
            id: 'all-questions-component'
        });
    }

    onPress2() {
        this.props.navigator.push({
            id: 'Code-Env'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to the Single Question Component</Text>
                <Button
                    onPress={this.onPress}
                    title="Go Back"
                /><Button
                    onPress={this.onPress2}
                    title="Answer"
                />
            </View>
        );
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
