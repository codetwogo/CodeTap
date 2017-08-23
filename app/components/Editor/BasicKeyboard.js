import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci} from 'react-native';

import NumsLetters from '../Buttons/NumsLetters';


export default class BasicKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View style={styles.container}>
          <NumsLetters
            edit={this.props.edit} shiftLeft={this.props.shiftLeft}
            shiftRight={this.props.shiftRight}
            del={this.props.del}
            space={this.props.space}
            />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
});
