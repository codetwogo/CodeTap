import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class SingleQuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.question.title,
            tests: this.props.question.tests,
            boilerplate: this.props.question.boilerPlate
        };
        this.onPress = this.onPress.bind(this);
        this.onPress2 = this.onPress2.bind(this);
        this.onPress3 = this.onPress3.bind(this);
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

    onPress3() {
        this.props.navigator.push({
            id: 'test-env'
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.title}</Text>
                <Text>{this.state.tests}</Text>
                <Text>{this.state.boilerplate}</Text>

                <Button
                    onPress={this.onPress}
                    title="Go Back"
                />

                <Button
                    onPress={this.onPress2}
                    title="Code!"
                />
                <Button
                    onPress={this.onPress3}
                    title="Test Env"
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
