import React, { Component } from 'react';
import { Switch, View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci, ScrollView } from 'react-native';
import { Container } from 'native-base';

import BasicKeyboard from './BasicKeyboard';
import SmartKeyboard from '../ClipButtons';
import CodeHeader from '../CodeHeader';
import NewSwitchView from './NewSwitchView';

import {
  setTextChange,
  setShiftLeft,
  setShiftRight,
  setDelete
} from '../utils/CodeEnv.utils.js';

export default class NewCodeEnv extends Component {
  constructor(props) {
    super(props);
    // set initial state based on whether we navigated from single question or testenv component
    const focus = (this.props.userAnswer)
    ? this.props.textStates[this.props.textStates.length - 1].focus
    : this.props.question.boilerPlate.length - 3;

    const inputBody = (this.props.userAnswer)
    ? this.props.userAnswer
    : this.props.question.boilerPlate.slice(0, focus) + '|' + this.props.question.boilerPlate.slice(focus, this.props.question.boilerPlate.length);
    
    const textStates = this.props.textStates || [{ body: inputBody, focus: focus }];

    this.state = {
      inputBody: inputBody,
      focus: focus,
      description: this.props.question.description,
      textStates: textStates,
      switchVal: false,
      showQuestion: false
    };
  }


  //Text management functions
  onChangeText = (str) => {
    this.setState(setTextChange(this.state.inputBody, this.state.focus, str, this.state.textStates));
  }

  shiftLeft = () => {
    this.setState(setShiftLeft(this.state.inputBody, this.state.focus));
  }

  shiftRight = () => {
    this.setState(setShiftRight(this.state.inputBody, this.state.focus))
  }

  //Text altering functions
  del = () => {
    this.setState(setDelete(this.state.inputBody, this.state.focus, this.state.textStates));
  }

  space = () => {
    return (this.onChangeText(' '));
  }

  //Navigation functions

  onSubmit = () => {
    const body = this.state.inputBody;
    const answer = body.slice(0, this.state.focus) + body.slice(this.state.focus + 1);

    this.props.navigator.push({
      id: 'test-env',
      userAnswer: answer,
      tests: this.props.question.tests,
      textStates: this.state.textStates,
      description: this.state.description
    });
  }

  onBackPress = () => {
    this.props.navigator.push({ id: 'homecomponent' });
  }

  //Switch Management Functions

  onSwitchChange = (value) => {
    this.setState({
      switchVal: value
    });
    if (this.state.showQuestion) {
      this.setState({
        showQuestion: false
      });
    }
  }

  onQuestionSwitchChange = (value) => {
    this.setState({
      showQuestion: value
    });
    if (this.state.switchVal) {
      this.setState({
        switchVal: false
      });
    }

  }

  //Undo State management functions

  undo = () => {
    if (this.state.textStates.length === 1) return false;
    const statesPlaceHolder = this.state.textStates;
    statesPlaceHolder.pop();
    const lastInd = statesPlaceHolder.length - 1;

    this.setState({
      inputBody: statesPlaceHolder[lastInd].body,
      focus: statesPlaceHolder[lastInd].focus,
      textStates: [...statesPlaceHolder]
    });
  }



  render() {
    return (
      <Container>
        <CodeHeader
          navigator={this.props.navigator}
          submit={this.onSubmit}
          style={styles.item} />
        <View style={styles.container}>
          <View style={styles.inputTextBg}>
            <ScrollView style={{ height: 200 }}>
              <Text
                style={styles.textInput}>
                {this.state.inputBody}
              </Text>
            </ScrollView>
          </View>
          <NewSwitchView
            undo={this.undo}
            switchVal={this.state.switchVal}
            onSwitchChange={this.onSwitchChange}
            onQuestionSwitchChange={this.onQuestionSwitchChange}
            switchQuestion={this.state.switchQuestion}
            description={this.state.description}
            showQuestion={this.state.showQuestion}
            edit={this.onChangeText}
            shiftLeft={this.shiftLeft}
            shiftRight={this.shiftRight}
            del={this.del}
            space={this.space}
          />
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
    backgroundColor: '#333333'
  },
  inputTextBg: {
    backgroundColor: '#6E3F3D',
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 4
  },
  textInput: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    padding: 15,
    paddingTop: 15,
    borderRadius: 10,
    backgroundColor: 'transparent'
  },
});
