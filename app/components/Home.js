import React, {Component} from 'react';
import {AppRegistry, View, Text, StyleSheet} from 'react-native';

export const HomeComponent = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Home Component</Text>
        </View>
    )
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
  