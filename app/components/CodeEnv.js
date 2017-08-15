import React, { Component } from 'react';
import { KeyboardAvoidingView, View, AppRegistry, Keyboard, StyleSheet, Button, TextInput, Switch } from 'react-native';

export default class CodeEnv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Hello',
      switchVal: false,
      focus: false
    };
    this.onBackPress = this.onBackPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.focus = this.focus.bind(this);
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

  onSwitchChange(value) {
    this.setState({
      switchVal: value,
      focus: false
    });
    if (!this.state.switchVal) {
      Keyboard.dismiss();
    }
    if (this.state.focus) {
      this.setState({
        switchVal: !value
      })
    }
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
            clearTextOnFocus={false}
            multiline={true}
            ref={(input) => { this.textInput = input }}
          />
          <Switch
            value={this.state.switchVal}
            onValueChange={(value) => this.onSwitchChange(value)}
          />
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
    marginTop: 50
  },

  textInput: {
    margin: 15,
    height: 200,
    borderWidth: 1
  }
});
