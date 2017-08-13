import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class SingleQuestionComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.question.title,
            tests: this.props.question.tests,
            boilerplate: this.props.question.boilerPlate
        }
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
                <Text>{this.state.title}</Text>
                <Text>{this.state.tests}</Text>
                <Text>{this.state.boilerplate}</Text>
                
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
