import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default class CodeEnv extends Component {
    constructor(props) {
        super(props);
        this.state = {
          textValue:'Hello'
        };
        this.onBackPress = this.onBackPress.bind(this);
    }

    onBackPress() {
        this.props.navigator.push({id: 'single-question-component'});
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
