import React, { Component } from 'react';
import { View, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class ArrayButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ArrayKeys: [
                {title: 'length', output: '.length'},
                {title: 'slice', output: '.slice()'},
                {title: 'splice', output: '.splice()'},
                {title: 'pop', output: '.pop()'},
                {title: 'push', output: '.push()'},
                {title: 'shift', output: '.shift()'},
                {title: 'unshift', output: '.unshift()'},
                {title: 'sort', output: '.sort()'},
                {title: 'join', output: '.join()'},
                {title: 'concat', output: '.concat()'}
            ],
        };
    }

    render() {
        return (
                <View style={styles.container}>
                  {this.state.ArrayKeys.map((key)=> {
                    return(
                      <TouchableOpacity key={key.title} style={styles.hotKey}
                        onPress={()=> {
                          this.props.edit(key.output);
                          return this.props.toggle();
                        }
                      }>
                      <Text>
                      {key.title}
                      </Text>
                    </TouchableOpacity>);
                    })
                }
                  </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 30,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hotKey: {
    justifyContent: 'center',
    alignItems: 'center',
    width:100,
    borderColor: 'red',
    backgroundColor: 'green',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1
  }
});
