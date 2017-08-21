import React, { Component } from 'react';
import { KeyboardAvoidingView, Keyboard, StyleSheet, TextInput, Switch } from 'react-native';

import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

import TextIDE from './Editor/TextIDE';
import SwitchView from './Editor/SwitchView';
import CodeHeader from './CodeHeader.js';

export default class CodeEnv extends Component {
  constructor(props) {
    super(props);

    const cursorStart = (this.props.userAnswer) ? this.props.textStates[this.props.textStates.length - 1].cursorPosition : this.props.question.boilerPlate.length - 2;

    // textValue and textStates will come from either single question comp or testenv
    const textValue = (this.props.userAnswer) ? this.props.userAnswer : this.props.question.boilerPlate;

    const textStates = this.props.textStates || [{ text: this.props.question.boilerPlate, cursorPosition: [cursorStart, cursorStart] }];

    this.state = {
      // user answer
      textValue: textValue,
      switchVal: true,
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
    this.cursorBlur = this.cursorBlur.bind(this);
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
      textStates: this.state.textStates,
      description: this.state.description
    });
  }

  edit(text) {
    const _self = this.state.textValue;
    const start = this.state.cursorPositions[0];
    const end = this.state.cursorPositions[1];

    const output = _self.slice(0, start) + text + _self.slice(end);

    // if (!this.state.cursorPositions.length) return false;
    console.log('EDIT FIRED!!!');
    this.textEnvChange(output, text.length);
    this.setState({
      switchVal: true
    })
  }

  // changes the text value in state after keyboard sends data
  textEnvChange(textValue, textLength = 0) {
    const start = this.state.cursorPositions[0];
    const end = this.state.cursorPositions[1];
    console.log(textLength);
    this.setState({
      textValue,
      focus: true,
      cursorPositions: [start + textLength, end + textLength]
    }, () => console.log('TEXT ENV CURSOR', this.state.cursorPositions));

    // test appending text state to states
    if (this.state.textStates.length >= 20) {

      const statesPlaceHolder = this.state.textStates;
      statesPlaceHolder.shift();

      this.setState({
        textStates: [...statesPlaceHolder, { text: textValue, cursorPosition: [start + textLength, end + textLength] }]
      });
    }

    if (this.state.textStates.length < 20) {
      this.setState({
        textStates: [...this.state.textStates, { text: textValue, cursorPosition: [start + textLength, end + textLength] }]
      });
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
    });
  }

  textFocus() {
    console.log("initial cursor position", this.state.cursorPositions[0]);
    console.log("lenght of function", this.state.textValue.length);
    if (this.state.cursorPositions[0] === this.state.textValue.length) {
      this.setState({ cursorPositions: [this.state.cursorPositions[0] - 1, this.state.cursorPositions[1] - 1] });
    }
    this.setState({
      switchVal: false,
      showQuestion: false
    }, () => {
      if (this.state.switchVal) {
        Keyboard.dismiss();
      }
    });
  }

  // toggles question description
  onQuestionSwitchChange(value) {
    this.setState({
      showQuestion: value,
      switchVal: !value,
      focus: false
    }, () => {
      if (this.state.showQuestion) {
        Keyboard.dismiss();
      }
    }, () => {
      if (this.state.focus) {
        this.setState({
          showQuestion: false
        });
      }
    });
  }

  // toggles keyboard display based on switch status
  onSwitchChange(value) {
    this.setState({
      showQuestion: !value,
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
    console.log('E-event', e.nativeEvent);
    const start = e.nativeEvent.selection.start;
    const end = e.nativeEvent.selection.end;

    this.setState({
      cursorPositions: [start, end]
    }, () => console.log('Cursor At Selection Change', this.state.cursorPositions));
  }

  // will append user input into code env in correct place

  cursorBlur() {
    console.log('Cursor Blur', this.state.cursorPositions);
  }

  //****************************************//
  // **************** Render ************** //
  //****************************************//

  render() {
    return (
      <Container>
        <CodeHeader
          navigator={this.props.navigator}
          submit={this.onSubmit}
          style={styles.item} />
        <View style={styles.container}
          behavior="padding">
          <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch' }}>
            <TextIDE
              textFocus={this.textFocus}
              textValue={this.state.textValue}
              textEnvChange={this.textEnvChange}
              onSelectionChange={this.onSelectionChange}
              cursorBlur={this.cursorBlur}
              switchVal={this.state.switchVal}
             />
            <SwitchView
              undo={this.undo}
              switchVal={this.state.switchVal}
              onSwitchChange={this.onSwitchChange}
              onQuestionSwitchChange={this.onQuestionSwitchChange}
              switchQuestion={this.state.switchQuestion}
              description={this.state.description}
              showQuestion={this.state.showQuestion}
              edit={this.edit} />
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#fff'
  }
});
