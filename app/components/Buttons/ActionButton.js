import React, { Component } from 'react';
import { View, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';

export default class ActionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ActionKeys: [
        { title: 'return', output: 'return ' },
        { title: 'continue', output: 'continue;' },
        { title: 'break', output: 'break;' },
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.ActionKeys.map((key) => {
          return (
            <TouchableOpacity key={key.title} style={styles.hotKey}
              onPress={() => {
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
        <TouchableOpacity style={styles.backKey}
          onPress={() => this.props.toggle()}>
          <Text>Previous</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  hotKey: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderColor: 'red',
    backgroundColor: 'green',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1
  },
  backKey: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    borderColor: 'black',
    backgroundColor: 'red',
    padding: 10,
    marginTop: 5,
    marginBottom: 5,
    borderWidth: 1
  }
});
