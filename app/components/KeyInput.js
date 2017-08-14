import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button, KeyInput } from 'react-native';

export default class KeyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
          textValue:'Hello'
        };
    }

    onChangeText(value){
      this.setState({
        textValue:value
      });
    }

    onSubmit(){
      console.log("solution page coming soon");
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>{this.state.textValue}</Text>
              <TextInput
                placeHolder="Answer"
                value={this.state.textValue}
                onChangeText={(value) => this.onChangeText(value)}
                onSubmitEditing={this.onSubmit}
              />
                <Button
                    onPress={this.onPress}
                    title="Submit"
                />
            </View>
        );
    }
}

AppRegistry.registerComponent('KeyInput', () => KeyInput);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
