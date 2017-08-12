import React, {Component} from 'react';
import {AppRegistry, View, Text} from 'react-native';

export const HomeComponent = () => {
    return (
        <View>
            <Text>Welcome to the Home Component</Text>
        </View>
    )
}

AppRegistry.registerComponent('HomeComponent', () => HomeComponent);