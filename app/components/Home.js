import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';

export default class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.navigator.push({
            id: 'all-questions-component'
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.openingText}>Code to Train.{'\n'}Train to Code.</Text>
                <Button bordered rounded light style={styles.button} onPress={this.onPress}>
                    <Text style={styles.startText}>START</Text>
                </Button>
            </View>
        );
    }
}

AppRegistry.registerComponent('HomeComponent', () => HomeComponent);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#550000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    openingText: {
        color: '#AC807E',
        textAlign: 'center',
        fontSize: 76, lineHeight: 76,
        fontWeight: 'bold'
    },
    button: {
        alignSelf: 'center',
        marginTop: 30
    },
    startText: {
        alignSelf: 'center',
        fontWeight: 'bold'
    }
});
