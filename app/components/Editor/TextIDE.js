import React, { Component } from 'react';
import { TextInput, StyleSheet } from 'react-native';

export default ({ textEnvChange, textValue, textFocus, onSelectionChange, cursorBlur, switchVal }) => {

    return (
        <TextInput
            style={styles.textInput}
            onChangeText={text => {textEnvChange(text);}}
            value={textValue}
            onFocus={textFocus}
            onBlur={cursorBlur}

            // This event keeps track of the cursor position...we will need for our keyboard implementation
                onSelectionChange={(e) => {onSelectionChange(e);}}
            clearTextOnFocus={false}
            multiline={true}
        />
    );
};
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
