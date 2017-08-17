import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({ textEnvChange, textValue, textFocus }) => {

    return (
        <TextInput
            style={styles.textInput}
            onChangeText={textValue => {textEnvChange(textValue)}}
            value={textValue}

            onFocus={() => textFocus}

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
    )
}
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