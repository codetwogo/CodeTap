import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci} from 'react-native';

import LeftArrow from '../Buttons/LeftArrow';
import RightArrow from '../Buttons/RightArrow';
import NumsLetters from '../Buttons/NumsLetters';


export default class BasicKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return (
      <View>
          <NumsLetters edit={this.props.edit}/>
          <LeftArrow shiftLeft={this.props.shiftLeft}/>
          <RightArrow shiftRight={this.props.shiftRight}/>
      </View>
    );
  }
}
