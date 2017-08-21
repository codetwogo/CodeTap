import React, { Component } from 'react';
import { TouchableWithoutFeedback, View, AppRegistry, Keyboard, StyleSheet, Button, TextInput, TouchableOpacity, Clipboard } from 'react-native';

export default class CodeKeyboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchVal:this.props.switchVal
    };
  }
  render() {
    return (
      <View>

        <TextInput
          autoCorrect={false}
          editable={!this.props.switchVal}
          selectTextOnFocus={!this.props.switchVal}
          style={styles.textInput}
          onChangeText={text => {this.props.textEnvChange(text);}}
          value={this.props.textValue}
          onSelectionChange={(e) => {this.props.onSelectionChange(e);}}
          clearTextOnFocus={false}
          multiline={true}
          ref={'input'}
        />
        <Button title='Blur' onPress={()=>this.refs.input.blur()}/>
        <Button title='Focus' onPress={()=>this.refs.input.focus()}/>
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
