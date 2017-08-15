import React, { Component } from 'react';
import { KeyboardAvoidingView, View, AppRegistry, Keyboard, StyleSheet, Button, TextInput, Switch, Text } from 'react-native';

export default class CodeEnv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textValue: this.props.question.boilerPlate,
            switchVal: false,
            showQuestion: false,
            focus: false,
            description: this.props.question.description
        };
        this.onBackPress = this.onBackPress.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.focus = this.focus.bind(this);
        this.onQuestionSwitchChange = this.onQuestionSwitchChange.bind(this);
    }

    focus() {
        this.textInput.focus();
    }

    // navigates back a url
    onBackPress() {
        this.props.navigator.push({ id: 'homecomponent' });
    }

    // method for when user is ready to test code out
    onSubmit() {
        this.props.navigator.push({
            id: 'test-env',
            userAnswer: this.state.textValue,
            tests: this.props.question.tests
        });
    }

    onChangeText(textValue) {
        this.setState({
            textValue,
            focus: true
        })
        if (this.state.switchVal) {
            this.setState({
                switchVal: false
            })
        }
    }

    onQuestionSwitchChange(value) {
        this.setState({
            showQuestion: value,
        });
    }

    onSwitchChange(value) {
        this.setState({
            switchVal: value,
            focus: false
        });

        //This is not working as we'd like. this.setState is async
        // if (!this.state.switchVal) {
        //     Keyboard.dismiss();
        // }
        // if (this.state.focus) {
        //     this.setState({
        //         switchVal: !value
        //     })
        // }
    }

    render() {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior="padding"
            >
                <View style={{ flex: 0.8 }}>
                    <TextInput style={styles.textInput}
                        onChangeText={textValue => this.onChangeText(textValue)}
                        value={this.state.textValue}
                        // This event keeps track of the cursor position...we will need for our keyboard implementation
                        onSelectionChange={(e) => {
                          const start = e.nativeEvent.selection.start;
                          const end = e.nativeEvent.selection.end;
                          console.log('start', start);
                          console.log('end', end)
                        }}
                        clearTextOnFocus={false}
                        multiline={true}
                        ref={(input) => { this.textInput = input }}
                    />
                    <View>
                        <Switch
                            value={this.state.switchVal}
                            onValueChange={(value) => this.onSwitchChange(value)}
                        />
                        <Text>Show Keyboard</Text>
                    </View>
                    <View>
                        <Switch
                            value={this.state.showQuestion}
                            onValueChange={(value) => this.onQuestionSwitchChange(value)}
                        />
                        <Text>Show Question</Text>
                        {
                            this.state.showQuestion ? <Text>{this.state.description}</Text> : null
                        }
                    </View>
                </View>
                <View style={{ flex: 0.2 }}>
                    <Button
                        onPress={this.onSubmit}
                        title="Submit"
                    />
                    <Button
                        onPress={this.onBackPress}
                        title="Back"
                    />
                </View>
            </KeyboardAvoidingView >
        );
    }
}

AppRegistry.registerComponent('CodeEnv', () => CodeEnv);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
    },

    textInput: {
        margin: 15,
        height: 200,
        borderWidth: 1
    },
});
