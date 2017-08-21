import React, { Component } from 'react';
import { AppRegistry, Keyboard, StyleSheet, TouchableOpacity, Clipboard } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, Input } from 'native-base';

export default class ArrayButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayKeys: [
        { title: 'length', output: '.length' },
        { title: 'slice', output: '.slice()' },
        { title: 'splice', output: '.splice()' },
        { title: 'pop', output: '.pop()' },
        { title: 'push', output: '.push()' },
        { title: 'shift', output: '.shift()' },
        { title: 'unshift', output: '.unshift()' },
        { title: 'sort', output: '.sort()' },
        { title: 'join', output: '.join()' },
        { title: 'concat', output: '.concat()' },
        { title: 'map', output: '.map( () => {\n\t\n})' },
        { title: 'filter', output: '.filter( () => {\n\t\n\t})' },
        { title: 'reduce', output: '.reduce( () => {\n\t\n\t})' },
        { title: 'forEach', output: '.forEach( () => {\n\t\n\t})' },
        { title: 'indexOf', output: '.indexOf()' }
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.ArrayKeys.map((key) => {
          return (
            <Button key={key.title} style={styles.hotKey}
              onPress={() => {
                this.props.edit(key.output);
                return this.props.toggle();
              }
              }>
              <Text>
                {key.title}
              </Text>
            </Button>);
        })
        }
        <View style={styles.smallContainer}>
          <Button small
            style={styles.backKey}
            onPress={() => this.props.toggle()}>
            <Text style={{color: '#666666'}}>Previous</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 50,
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  smallContainer: {
    minWidth: 400,
    flexWrap: 'wrap',
    padding: 4,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  hotKey: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 3,
    marginLeft: 1,
    marginRight:1,
    marginBottom: 5,
    backgroundColor: '#999999'
  },
  backKey: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderColor: '#666666',
    backgroundColor: 'transparent',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1
  }
});
