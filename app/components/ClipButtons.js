import React, { Component } from 'react';
import { View, ListView, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';
import LoopsButton from './Buttons/LoopsButton';
import ConditionalButton from './Buttons/ConditionalButton';
import VariableButton from './Buttons/VariableButton';
import ArrayButton from './Buttons/ArrayButton';
import OperatorButton from './Buttons/OperatorButton';
import ActionButton from './Buttons/ActionButton';
import StringButton from './Buttons/StringButton';

export default class ClipButton extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      hotKeys: ds.cloneWithRows([
        { title: 'Loops', comp: LoopsButton },
        { title: 'Conditional', comp: ConditionalButton },
        { title: 'Variable', comp: VariableButton },
        { title: 'Array', comp: ArrayButton },
        { title: 'Operator', comp: OperatorButton },
        { title: 'Action', comp: ActionButton },
        { title: 'String', comp: StringButton },
      ]),
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
            : <ListView
              dataSource={this.state.hotKeys}
              renderRow={(rowData) =>
                <TouchableOpacity onPress={() => {
                  this.selectButton(rowData.comp);
                  this.onButtonPush();}}>
                  <Text style={styles.hotKey}>
                    {rowData.title}
                  </Text>
                </TouchableOpacity>}
            />
        }
      </View>
    );
  }
}

AppRegistry.registerComponent('ClipButton', () => ClipButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  hotKey: {
    flex: 1,
    color: 'green'
  }
});
