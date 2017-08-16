import React, { Component } from 'react';
import { KeyboardAvoidingView, View, AppRegistry, Keyboard, StyleSheet, Button, TextInput, Switch, Text } from 'react-native';
import ClipButtons from './ClipButtons';

export default class CodeEnv extends Component {
  constructor(props) {
    super(props);

    const cursorStart = this.props.question.boilerPlate.length - 2;

    this.state = {
      textValue: this.props.question.boilerPlate,
      switchVal: false,
      showQuestion: false,
      description: this.props.question.description,
      cursorPositions: [cursorStart, cursorStart],
      startRender: true,

    };
    // bind methods
    this.onBackPress = this.onBackPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onQuestionSwitchChange = this.onQuestionSwitchChange.bind(this);
    this.edit = this.edit.bind(this);
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

  // changes the text value in state after keyboard sends data
  onChangeText(textValue) {

    this.setState({
      textValue,
      focus: true
    });
    if (this.state.switchVal) {
      this.setState({
        switchVal: false
      });
    }
  }

  // toggles question description
  onQuestionSwitchChange(value) {
    this.setState({
      showQuestion: value,
    });
  }

  // toggles keyboard display based on switch status
  onSwitchChange(value) {
    this.setState({
      switchVal: value,
      focus: false
    }, () => {
      if (this.state.switchVal) {
        Keyboard.dismiss();
      }
    }, () => {
      if (this.state.focus) {
        this.setState({
          switchVal: false
        });
      }
    });
  }

  // will append user input into code env in correct place
  edit(text) {
    // change state text value based on text returned from btn
    // appends based on last cursor position
    const _self = this.state.textValue;
    const start = this.state.cursorPositions[0];
    const end = this.state.cursorPositions[1];

    const output = _self.slice(0, start) + text + _self.slice(end);

    if (!this.state.cursorPositions.length) return false;

    this.onChangeText(output);
  }

  render() {
    console.log('cursor', this.state.cursorPositions);

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View style={{ flex: 0.8 }}>

          <TextInput style={styles.textInput}
            onChangeText={textValue => this.onChangeText(textValue)}
            value={this.state.textValue}
            onFocus={() => this.setState({
              switchVal: false
            })}
            // This event keeps track of the cursor position...we will need for our keyboard implementation
            onSelectionChange={(e) => {
              if (this.state.startRender) {
                this.setState({
                  startRender: false
                });
                return;
              }
              const start = e.nativeEvent.selection.start;
              const end = e.nativeEvent.selection.end;

              this.setState({
                cursorPositions: [start, end]
              });
            }}
            clearTextOnFocus={false}
            multiline={true}
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

          <ClipButtons edit={this.edit} />

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
