import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, Button } from 'native-base';

export default class LoopButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LoopKeys: [
        { title: 'for', output: 'for(let i=0; ;i++){\n\t\n\t}' },
        { title: 'for in', output: 'for(let key in ){\n\t\n\t}' },
        { title: 'while', output: 'while(){\n\t\n\t}' }
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.LoopKeys.map((key) => {
          return (
            <Button
              key={key.title}
              style={styles.hotKey}
              onPress={() => {
                this.props.edit(key.output);
                return this.props.toggle();
              }
              }>
              <Text style={styles.hotKeyText}>{key.title}</Text>
            </Button>);
        })
        }
        <View style={styles.smallContainer}>
          <Button
            small style={styles.backKey}
            onPress={() => this.props.toggle()}>
            <Text style={styles.backKeyText}>Previous</Text>
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
    marginRight: 1,
    marginBottom: 5,
    backgroundColor: '#999999'
  },
  hotKeyText: {
    color: '#444444'
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
  },
  backKeyText: {
    color: '#666666'
  }
});
