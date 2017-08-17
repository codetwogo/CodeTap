import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class SingleQuestionComponent extends Component {
    //consider destructuring {question: { title, tests, boilerPlate, description}}
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.question.title,
            tests: this.props.question.tests,
            boilerPlate: this.props.question.boilerPlate,
            description: this.props.question.description
        };
        //consider Arrow functions
        this.onBackPress = this.onBackPress.bind(this);
        this.onCodePress = this.onCodePress.bind(this);
    }

    // go back to all questions list
    onBackPress() {
        this.props.navigator.push({
            id: 'all-questions-component'
        });
    }

    // navigate to the code environment to begin question
    onCodePress() {
        this.props.navigator.push({
            id: 'Code-Env',
            question: this.state
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.title}</Text>
                {
                    this.state.tests.map(test => {
                        return (
                            <View key={test.inputs}>
                                <Text>Inputs: {test.inputs}</Text>
                                <Text>Output: {test.output} </Text>
                            </View>
                        )
                    })
                }
                <Text>{this.state.description}</Text>
                <Button
                    onPress={this.onCodePress}
                    title="Code!"
                />
                <Button
                    onPress={this.onBackPress}
                    title="Go Back"
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
