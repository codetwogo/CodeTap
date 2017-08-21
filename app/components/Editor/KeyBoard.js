import React, { Component } from 'react';
import { View, AppRegistry, Keyboard, StyleSheet, Button, TextInput, TouchableOpacity, Clipboard } from 'react-native';
import LoopsButton from './Buttons/LoopsButton';
import ConditionalButton from './Buttons/ConditionalButton';
import VariableButton from './Buttons/VariableButton';
import ArrayButton from './Buttons/ArrayButton';
import OperatorButton from './Buttons/OperatorButton';
import ActionButton from './Buttons/ActionButton';
import StringButton from './Buttons/StringButton';
import SpacingButton from './Buttons/SpacingButton';

export default class CodeKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Keys: []
    };
  }

  render() {
    return (
      <View>

        <TextInput
          style={styles.textInput}
          onChangeText={text => {props.textEnvChange(text);}}
          value={props.textValue}
          onFocus={props.textFocus}
          onBlur={props.cursorBlur}
          onSelectionChange={(e) => {props.onSelectionChange(e);}}
          clearTextOnFocus={false}
          multiline={true}
          ref={'input'}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent('CodeKeyboard', () => CodeKeyboard);

  const styles = StyleSheet.create({
      textInput: {
        color: 'white',
        fontSize: 18,
        height: 200,
        padding: 15,
        paddingTop: 15,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#666666',
        borderRadius: 10

      },
    });
