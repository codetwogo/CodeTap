import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Button, Text, TouchableOpaci} from 'react-native';

import LeftArrow from '../Buttons/LeftArrow';
import RightArrow from '../Buttons/RightArrow';
import Numbers from '../Buttons/Numbers';
import TopLetters from '../Buttons/TopLetters';
import MiddleLetters from '../Buttons/MiddleLetters';
import BottomLetters from '../Buttons/BottomLetters';

export default class BasicKeyboard extends Component {
  constructor(props) {
    super(props);
  }


  render(){
    return (
      <View style={styles.container}>
        <Numbers edit={this.props.edit}/>
        <TopLetters edit={this.props.edit}/>
        <MiddleLetters edit={this.props.edit}/>
        <BottomLetters edit={this.props.edit}/>
        <View>
          <LeftArrow shiftLeft={this.props.shiftLeft}/>
          <RightArrow shiftRight={this.props.shiftRight}/>
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
    justifyContent: 'center'
  },
  hotKey: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 3,
    marginLeft: 1,
    marginRight:1,
    marginBottom: 5,
    backgroundColor: '#999999'
  }
});
