import React, { Component } from 'react';
import { View, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';
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
  selectButton(button){
    this.setState({selectedButton: button});
  }

  render() {
    return (
      <View>
        {
          this.state.buttonPushed ?
            <TouchableOpacity onPress={() => this.onButtonPush()}>
              <this.state.selectedButton toggle={this.onButtonPush} edit={this.props.edit}/>
            </TouchableOpacity>
            : <View style={styles.container}>
              {this.state.hotKeys.map((hotkey)=>{
                return(
                <TouchableOpacity style={styles.hotKey} key={hotkey.title} onPress={() => {
                  this.selectButton(hotkey.comp);
                  this.onButtonPush();}}>
                  <Text>
                    {hotkey.title}
                  </Text>
                </TouchableOpacity>);})}
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
