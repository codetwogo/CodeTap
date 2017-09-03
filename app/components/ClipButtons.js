import React, { Component } from 'react';
import { AppRegistry, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Button } from 'native-base';

import LoopsButton from './Buttons/LoopsButton';
import ConditionalButton from './Buttons/ConditionalButton';
import VariableButton from './Buttons/VariableButton';
import ArrayButton from './Buttons/ArrayButton';
import OperatorButton from './Buttons/OperatorButton';
import ActionButton from './Buttons/ActionButton';
import StringButton from './Buttons/StringButton';
import SpacingButton from './Buttons/SpacingButton';

export default class ClipButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hotKeys: [
        { title: 'Loops', comp: LoopsButton },
        { title: 'Conditional', comp: ConditionalButton },
        { title: 'Variable', comp: VariableButton },
        { title: 'Array', comp: ArrayButton },
        { title: 'Operator', comp: OperatorButton },
        { title: 'Action', comp: ActionButton },
        { title: 'String', comp: StringButton },
        { title: 'Spacing', comp: SpacingButton },
      ],
      selectedButton: {},
      buttonPushed: false
    };
    this.onButtonPush = this.onButtonPush.bind(this);
  }
  onButtonPush() {
    this.setState({ buttonPushed: !this.state.buttonPushed });
  }
  selectButton(button) {
    this.setState({ selectedButton: button });
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.buttonPushed ?
            <TouchableOpacity onPress={() => this.onButtonPush()}>
              <this.state.selectedButton toggle={this.onButtonPush} edit={this.props.edit} />
            </TouchableOpacity>
            : <View style={styles.container}>
              {this.state.hotKeys.map((hotkey) => {
                return (
                  <Button dark style={styles.hotKey} key={hotkey.title} onPress={() => {
                    this.selectButton(hotkey.comp);
                    this.onButtonPush();
                  }}>
                    <Text style={{ color: '#444444' }}>
                      {hotkey.title}
                    </Text>
                  </Button>);
              })}
            </View>
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('ClipButton', () => ClipButton);

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    marginTop: 50,
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
  }
});
