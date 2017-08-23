import React, { Component } from 'react';
import { Switch, View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci} from 'react-native';
import { Container } from 'native-base';

import BasicKeyboard from './BasicKeyboard';
import SmartKeyboard from '../ClipButtons';
import CodeHeader from '../CodeHeader';

export default class NewCodeEnv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputBody:this.props.question.boilerPlate,
      focus:this.props.question.boilerPlate.length-3,
      switchVal:false
    };
    this.onChangeText=this.onChangeText.bind(this);
    this.shiftLeft=this.shiftLeft.bind(this);
    this.shiftRight=this.shiftRight.bind(this);
    this.del=this.del.bind(this)
    this.space=this.space.bind(this)
  }
    onChangeText(str){
      const body = this.state.inputBody;
      const focus = this.state.focus;
      const bodyPreFocus = body.slice(0, focus);
      const bodyPostFocus = body.slice(focus+1, body.length);
      const newFocus = focus+str.length;
      const newBody = bodyPreFocus+str+"|"+bodyPostFocus;
      this.setState({
        inputBody: newBody,
        focus: newFocus
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
          console.log('prefocus', bodyPreFocus);
          console.log('postfocus', bodyPostFocus);
          const shiftedBody = newBodyPre+'|'+newBodyPost;
          this.setState({
            inputBody: shiftedBody,
            focus:newFocus});
        }
      }

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
          focus:newFocus});
      }
    }

    space(){
      return(this.onChangeText(' '))
    }

    onSwitchChange(value) {
      this.setState({
        switchVal: value,
      });
    }

    onBackPress() {
      this.props.navigator.push({ id: 'homecomponent' });
    }

    onSubmit() {
      this.props.navigator.push({
        id: 'test-env',
        userAnswer: this.state.textValue,
        tests: this.props.question.tests,
        textStates: this.state.textStates,
        description: this.state.description
      });
    }


  render(){
    console.log(this.state.focus);
    return (
      <Container>
        <CodeHeader
          navigator={this.props.navigator}
          submit={this.onSubmit}
          style={styles.item} />
        <View  style={styles.container}>
          <Text
          style={styles.textInput}
          >{this.state.inputBody}</Text>
          <Switch
            value={this.state.switchVal}
            onValueChange={(value) => {this.onSwitchChange(value);}} />
          {
            this.state.switchVal
          ?
          <SmartKeyboard
            edit={this.onChangeText}
          />
        :
        <BasicKeyboard
          edit={this.onChangeText}
          shiftLeft={this.shiftLeft}
          shiftRight={this.shiftRight}
          del={this.del}
          space={this.space}
        />
      }
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
    textInput: {
      color: 'white',
      fontSize: 18,
      height: 200,
      padding: 15,
      paddingTop: 15,
      marginTop: 4,
      marginBottom: 4,
      borderRadius: 30,
      backgroundColor: '#550600'
    },
  });
