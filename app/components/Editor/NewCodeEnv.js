import React, { Component } from 'react';
import { Switch, View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci, ScrollView } from 'react-native';
import { Container } from 'native-base';

import BasicKeyboard from './BasicKeyboard';
import SmartKeyboard from '../ClipButtons';
import CodeHeader from '../CodeHeader';
import NewSwitchView from './NewSwitchView';

export default class NewCodeEnv extends Component {
  constructor(props) {
    super(props);
    const focus = (this.props.userAnswer) ? this.props.textStates[this.props.textStates.length - 1].focus : this.props.question.boilerPlate.length - 3;
    const inputBody = (this.props.userAnswer) ? this.props.userAnswer : this.props.question.boilerPlate.slice(0, focus)+'|'+this.props.question.boilerPlate.slice(focus, this.props.question.boilerPlate.length);
    const textStates= this.props.textStates || [{body:inputBody, focus:focus}];
    this.state = {
      inputBody:inputBody,
      focus:focus,
      description: this.props.question.description,
      textStates: textStates,
      switchVal:false,
      showQuestion: false
    };

    this.onChangeText=this.onChangeText.bind(this);
    this.shiftLeft=this.shiftLeft.bind(this);
    this.shiftRight=this.shiftRight.bind(this);
    this.del=this.del.bind(this);
    this.space=this.space.bind(this);
    this.undo=this.undo.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.onQuestionSwitchChange=this.onQuestionSwitchChange.bind(this);
    this.onSwitchChange=this.onSwitchChange.bind(this);
  }


  //Text management functions
    onChangeText(str){
      const body = this.state.inputBody;
      const focus = this.state.focus;
      const bodyPreFocus = body.slice(0, focus);
      const bodyPostFocus = body.slice(focus+1, body.length);
      const newFocus = focus+str.length;
      const newBody = bodyPreFocus+str+"|"+bodyPostFocus;

      this.setState({
        inputBody: newBody,
        focus: newFocus,
        textStates: [...this.state.textStates, {body:newBody, focus:newFocus}]
    });
  }

  shiftLeft(){
    const focus = this.state.focus;
    const newFocus = focus-1;
    const body = this.state.inputBody;
    const bodyPreFocus = body.slice(0, focus);
    const bodyPostFocus = body.slice(focus+1);
    const newBody= bodyPreFocus+bodyPostFocus;
    const newBodyPre = newBody.slice(0, newFocus);
    const newBodyPost = newBody.slice(newFocus);
    if(newFocus>-1){
      console.log('prefocus', bodyPreFocus);
      console.log('postfocus', bodyPostFocus);
      const shiftedBody = newBodyPre+'|'+newBodyPost;
      this.setState({
        inputBody: shiftedBody,
        focus:newFocus});
      }
    }

    shiftRight(){
      const focus = this.state.focus;
      const newFocus = focus+1;
      const body = this.state.inputBody;
      const bodyPreFocus = body.slice(0, focus);
      const bodyPostFocus = body.slice(focus+1);
      const newBody= bodyPreFocus+bodyPostFocus;
      const newBodyPre = newBody.slice(0, newFocus);
      const newBodyPost = newBody.slice(newFocus);

      if(newFocus<=newBody.length){
        const shiftedBody = newBodyPre+'|'+newBodyPost;
        this.setState({
          inputBody: shiftedBody,
          focus:newFocus});
        }
      }

      //Text altering functions
    del(){
        const focus = this.state.focus;
        const newFocus = focus-1;
        const body = this.state.inputBody;
        const bodyPreFocus = body.slice(0, newFocus)+'|';
        const bodyPostFocus = body.slice(focus+1);
        const newBody= bodyPreFocus+bodyPostFocus;
        if(newFocus>-1){
          this.setState({
            inputBody: newBody,
            focus:newFocus,
            textStates: [...this.state.textStates, {body:newBody, focus:newFocus}]
          });
          }
        }

        space(){
          return(this.onChangeText(' '));
        }

  //Navigation functions

  onSubmit() {
    const body = this.state.inputBody;
    const Answer =body.slice(0, this.state.focus)+body.slice(this.state.focus+1, body.length);

    this.props.navigator.push({
      id: 'test-env',
      userAnswer: Answer,
      tests: this.props.question.tests,
      textStates: this.state.textStates,
      description: this.state.description
    });
  }

  onBackPress() {
    this.props.navigator.push({ id: 'homecomponent' });
  }

//Switch Management Functions

    onSwitchChange(value) {
      this.setState({
        switchVal: value
      });
      if (this.state.showQuestion) {
            this.setState({
              showQuestion: false
            });
          }
    }

    onQuestionSwitchChange(value) {
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

    undo() {
      console.log(this.state.textStates);
      if (this.state.textStates.length === 1) return false;
      const statesPlaceHolder = this.state.textStates;
      statesPlaceHolder.pop();
      const lastInd = statesPlaceHolder.length - 1;

      this.setState({
        inputBody: statesPlaceHolder[lastInd].body,
        focus:statesPlaceHolder[lastInd].focus,
        textStates: [...statesPlaceHolder]
      });
    }



  render(){
    return (
      <Container>
        <CodeHeader
          navigator={this.props.navigator}
          submit={this.onSubmit}
          style={styles.item} />
        <View  style={styles.container}>
          <View style={styles.inputTextBg}>
            <ScrollView style={{height: 200}}>
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
