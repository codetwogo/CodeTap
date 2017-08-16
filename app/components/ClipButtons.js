import React, { Component } from 'react';
import { View, ListView, AppRegistry, Keyboard, StyleSheet, Button, Text, TouchableOpacity, Clipboard } from 'react-native';
import LoopsButton from './Buttons/LoopsButton';
import ConditionalButton from './Buttons/ConditionalButton';
import VariableButton from './Buttons/VariableButton';
import ArrayButton from './Buttons/ArrayButton';

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
      ]),
      buttonPushed: false
    };
    this.onButtonPush = this.onButtonPush.bind(this);
  }
  onButtonPush() {
    this.setState({ buttonPushed: !this.state.buttonPushed });
  }

  render() {
    return (
      <View>
        {
          this.state.buttonPushed ?
            <TouchableOpacity onPress={() => this.onButtonPush()}>
              <LoopsButton toggle={this.onButtonPush} edit={this.props.edit} />
              <ConditionalButton toggle={this.onButtonPush} edit={this.props.edit} />
              <VariableButton toggle={this.onButtonPush} edit={this.props.edit} />
              <ArrayButton toggle={this.onButtonPush} edit={this.props.edit} />
            </TouchableOpacity>
            : <ListView
              dataSource={this.state.hotKeys}
              renderRow={(rowData) =>
                <TouchableOpacity onPress={() => this.onButtonPush()}>
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
