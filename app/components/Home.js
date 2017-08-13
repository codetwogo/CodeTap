import React, { Component } from 'react';
import { AppRegistry, View, Text, StyleSheet, Button } from 'react-native';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.navigator.push({
            id: 'all-questions-component'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>Welcome to the Home Component</Text>
                <Button
                    onPress={this.onPress}
                    title="Start a War"
                />
            </View>
        )
    }
}

AppRegistry.registerComponent('HomeComponent', () => HomeComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
