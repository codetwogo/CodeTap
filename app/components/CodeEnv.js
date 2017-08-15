import React, { Component } from 'react';
import {Keyboard, AppRegistry, View, Text, StyleSheet, Button, TextInput, Switch } from 'react-native';

export default class CodeEnv extends Component {
    constructor(props) {
        super(props);
        this.state = {
          textValue: 'Hello',
          switchVal: false
        };
        this.onBackPress = this.onBackPress.bind(this);
    }

    onBackPress() {
        this.props.navigator.push({id: 'homecomponent'});
    }

    onSubmit(){
      console.log("solution page coming soon");
    }

    onSwitchChange(value){
      this.setState(
        {switchVal: value});
      if(!this.state.switchVal){
        Keyboard.dismiss();
      }
    }

    render() {
        return (
            <View style={styles.container}>

              <TextInput style={styles.textInput}
                onChangeText={(textValue) => this.setState({textValue})}
                value={this.state.textValue}
                clearTextOnFocus= {true}
                multiline= {true}
                isFocused= {true}
              />
              <Switch
                value={this.state.switchVal}
                onValueChange={(value)=> this.onSwitchChange(value)}
              />
                <Button
                    onPress={this.onSubmit}
                    title="Submit"
                />
                <Button
                    onPress={this.onBackPress}
                    title="Back"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('CodeEnv', () => CodeEnv);

const styles = StyleSheet.create ({
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
