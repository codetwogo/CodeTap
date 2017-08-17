import React, { Component } from 'react';
import { View, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class VariableButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            VariableKeys: [
              {title: 'let', output: 'let = '},
              {title: 'const', output: 'const = '},
              {title: 'var', output: 'var = '}],
        };
    }

    render() {
        return (
                <View style={styles.container}>
                  {this.state.VariableKeys.map((key)=> {
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
