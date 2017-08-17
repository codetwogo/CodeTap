import React, { Component } from 'react';
import { KeyboardAvoidingView, View, Keyboard, StyleSheet, Button, TextInput, Switch, Text } from 'react-native';

import TextIDE from './Editor/TextEnv';
import SwitchView from './Editor/SwitchView';

export default class CodeEnv extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.question.tests)
    const cursorStart = this.props.question.boilerPlate.length - 2;

    // textValue and textStates will come from either single question comp or testenv
    const textValue = (this.props.userAnswer) ? this.props.userAnswer : this.props.question.boilerPlate;
    const textStates = (this.props.textStates)
    ? this.props.textStates
    : [{text: this.props.question.boilerPlate, cursorPosition: [cursorStart, cursorStart]}]

    this.state = {
      // user answer
      textValue: textValue,
      switchVal: false,
      showQuestion: false,
      description: this.props.question.description,
      // keeps track of user cursor positon
      cursorPositions: [cursorStart, cursorStart],
      startRender: true,

      // testing previous states for undo button
      textStates: textStates

    };
    // bind methods
    this.onBackPress = this.onBackPress.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onQuestionSwitchChange = this.onQuestionSwitchChange.bind(this);
    this.edit = this.edit.bind(this);
    this.textEnvChange = this.textEnvChange.bind(this);
    this.textFocus = this.textFocus.bind(this);
    this.onSelectionChange = this.onSelectionChange.bind(this);
    this.onSwitchChange = this.onSwitchChange.bind(this);
    this.undo = this.undo.bind(this);
  }

  // **************************************//
  // ************* Methods *************** //
  // **************************************//

  // navigates back a url
  onBackPress() {
    this.props.navigator.push({ id: 'homecomponent' });
  }

  // method for when user is ready to test code out
  onSubmit() {
    this.props.navigator.push({
      id: 'test-env',
      userAnswer: this.state.textValue,
      tests: this.props.question.tests,
      textStates: this.state.textStates
    });
  }

  // changes the text value in state after keyboard sends data
  textEnvChange(textValue) {
    this.setState({
      textValue,
      focus: true,
    });

    // test appending text state to states
    if (this.state.textStates.length >= 20) {

      const statesPlaceHolder = this.state.textStates;
      statesPlaceHolder.shift();

      this.setState({
        textStates: [...statesPlaceHolder, { text: textValue, cursorPosition: this.state.cursorPositions }]
      })
    }

    if (this.state.textStates.length < 20) {
      this.setState({
        textStates: [...this.state.textStates, { text: textValue, cursorPosition: this.state.cursorPositions }]
      }, () => {
        // checking state change
        console.log('currentstate', this.state.textValue);
        console.log('lastarray', this.state.textStates[this.state.textStates.length - 1])
      })
    }

    // hides keyboard?
    if (this.state.switchVal) {
      this.setState({
        switchVal: false
      });
    }
  }

  // Go back a text state from states array
  undo() {
    if (this.state.textStates.length === 1) return false;
    const statesPlaceHolder = this.state.textStates;
    statesPlaceHolder.pop();
    const lastInd = statesPlaceHolder.length - 1;

    this.setState({
      textValue: statesPlaceHolder[lastInd].text,
      textStates: [...statesPlaceHolder]
    })
  }

  textFocus() {
    this.setState({
      switchVal: false
    });
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

  // method to keep track of cursor position when user moves cursor
  onSelectionChange(e) {
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
  }

  // will append user input into code env in correct place
  edit(text) {
    const _self = this.state.textValue;
    const start = this.state.cursorPositions[0];
    const end = this.state.cursorPositions[1];

    const output = _self.slice(0, start) + text + _self.slice(end);

    if (!this.state.cursorPositions.length) return false;

    this.textEnvChange(output);
  }

  //****************************************//
  // **************** Render ************** //
  //****************************************//

  render() {
    return (
      <View style={styles.container}
        behavior="padding">
        <View style={
          {
            flex: 0.1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
          <Button
            onPress={this.onBackPress}
            title="Back" />
          <Button
            onPress={this.undo}
            title="Undo" />
          <Button
            onPress={this.onSubmit}
            title="Submit" />
        </View>
        <View style={{ flex: 0.9 }}>
          <TextIDE
            textFocus={this.textFocus}
            textValue={this.state.textValue}
            textEnvChange={this.textEnvChange}
            onSelectionChange={this.onSelectionChange} />

          <SwitchView
            switchVal={this.state.switchVal}
            onSwitchChange={this.onSwitchChange}
            onQuestionSwitchChange={this.onQuestionSwitchChange}
            switchQuestion={this.state.switchQuestion}
            description={this.state.description}
            showQuestion={this.state.showQuestion}
            edit={this.edit} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  textInput: {
    margin: 15,
    height: 200,
    borderWidth: 1
  },
});
