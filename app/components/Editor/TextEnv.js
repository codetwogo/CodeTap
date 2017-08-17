import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({ textEnvChange, textValue, textFocus, onSelectionChange }) => {

    return (
        <TextInput
            style={styles.textInput}
            onChangeText={textValue => {textEnvChange(textValue);}}
            value={textValue}

            onFocus={textFocus}

            // This event keeps track of the cursor position...we will need for our keyboard implementation
                onSelectionChange={(e) => {onSelectionChange(e);}}
            clearTextOnFocus={false}
            multiline={true}
        />
    );
};
const styles = StyleSheet.create({
    textInput: {
      margin: 10,
      height: 200,
      borderWidth: 1,
    },
  });
